import * as dotenv from "dotenv";
dotenv.config();

export const config = {
  PORT: process.env.PORT! || 3000,
  nodeEnv: process.env.NODE_ENV! || "Development",
  mongoDb: {
    URI: process.env.MONGODB_URI! || "mongodb://localhost:27017/assignment",
  },
  redis: {
    URI:
      process.env.REDIS_URI! ||
      "redis://default:fAZchDQ4elhILmQoGmkRIaXpUzZzkKFq@redis-13725.c323.us-east-1-2.ec2.cloud.redislabs.com:13725",
  },
};
