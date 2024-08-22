import mongoose from "mongoose";
import { config } from "../../config";

const connectDB = async () => {
  try {
    await mongoose.connect(config.mongoDb.URI, {
      maxPoolSize: 5,
    });
    console.log("Main MongoDB connected successfully.");
  } catch (err) {
    console.log(err)
    process.exit(1);
  }
};

export { connectDB };
