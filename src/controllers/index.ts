import { Request, Response } from "express";
import { errors, handleResponse } from "../helpers/responseCodec";
import { redis } from "../config/redis/redis.config";
import { normalizeQuery } from "../helpers/normalizerQuery";
import { INFLUENCERMODEL } from "../model";

export const filterData = async (req: Request, res: Response) => {
  try {
    const cacheKey = `filter?${normalizeQuery(req.query)}`;
    const cachedMemory = await redis.get(cacheKey);
    if (cachedMemory) {
      console.log("From the cached memory");
      return handleResponse(res, 200, { value: JSON.parse(cachedMemory) });
    }
    let query: any = {};
    if (req.query.country) {

      // This is being index as a text in mongoDB to give you full text search for the country
      query["country"] = {
        $regex: new RegExp(req.query.country as string, "i"),
      };
    }
    if (req.query.min_influence_score) {
      const minInfluenceScore = parseFloat(
        req.query.min_influence_score as string
      );
      if (!isNaN(minInfluenceScore)) {
        query["influence_score"] = { $gte: minInfluenceScore };
      }
    }
    if (req.query.min_avg_likes) {
      const minAvgLikes = parseFloat(req.query.min_avg_likes as string);
      if (!isNaN(minAvgLikes)) {
        query["avg_likes"] = { $gte: minAvgLikes };
      }
    }
    if (req.query.min_followers) {
      const minFollowers = parseFloat(req.query.min_followers as string);
      if (!isNaN(minFollowers)) {
        query["followers"] = { $gte: minFollowers };
      }
    }
    let value = await INFLUENCERMODEL.find(query);
    if (value.length === 0) {
      return handleResponse(res, 404, errors.data_not_found);
    }
    redis.set(cacheKey, JSON.stringify(value), "EX", 60);
    return handleResponse(res, 200, { value: value });
  } catch (err: any) {
    return handleResponse(res, 500, errors.catch_error);
  }
};
