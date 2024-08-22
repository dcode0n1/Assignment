import { Document, Schema, model } from "mongoose";

interface IInfluencerPlatform extends Document {
  rank: number;
  channel_info: string;
  influence_score: number;
  posts: number;
  followers: number;
  avg_likes: number;
  engagement_rate_60_days: number;
  new_post_avg_like: number;
  total_likes: number;
  country: string;
}


// Mutation done to the 60 value since we cant store variable as the numerical format. 
// Created a index of the following for countries to get the nearby searches for the data
export const InfluencerPlatformSchema = new Schema<IInfluencerPlatform>({
  rank: { type: Number },
  channel_info: { type: String },
  influence_score: { type: Number },
  posts: { type: Number },
  followers: { type: Number },
  avg_likes: { type: Number },
  engagement_rate_60_days: { type: Number },
  new_post_avg_like: { type: Number },
  total_likes: { type: Number },
  country: { type: String },
});

InfluencerPlatformSchema.index({ country: "text" });

export const INFLUENCERMODEL = model<IInfluencerPlatform>(
  "InfluencerModel",
  InfluencerPlatformSchema
);
