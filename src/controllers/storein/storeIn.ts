import { Request, Response } from "express";
import { errors, handleResponse, success } from "../../helpers/responseCodec";
import { INFLUENCERMODEL } from "../../model";
import { parseShorthand, safeParseFloat } from "../../helpers/parseShotHands";

export const storeInData = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return handleResponse(res, 400, errors.data_not_stored);
    }
    const jsonArray = JSON.parse(req.file.buffer.toString("utf-8"));
    const sanitizedData = jsonArray.map((x: any) => {
      return {
        rank: parseInt(x.rank),
        channel_info: x.channel_info,
        influence_score: parseFloat(x.influence_score),
        posts: parseShorthand(x.posts),
        followers: parseShorthand(x.followers),
        avg_likes: parseShorthand(x.avg_likes),
        engagement_rate_60_days: safeParseFloat(
          x["60_day_eng_rate"].replace("%", "") || "0"
        ),
        new_post_avg_like: parseShorthand(x.new_post_avg_like),
        total_likes: parseShorthand(x.total_likes),
        country: x.country || "",
      };
    });
    const check = await INFLUENCERMODEL.insertMany(sanitizedData);
    if (!check) {
      return handleResponse(res, 400, errors.data_not_stored);
    }
    return handleResponse(res, 200, success.data_stored);
  } catch (err: any) {
    console.log(err);
    return handleResponse(res, 500, errors.catch_error);
  }
};
