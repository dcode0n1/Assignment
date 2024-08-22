import express, { Express } from "express";
import cluster from "cluster";
import os from "os";
import { redis } from "./config/redis/redis.config";
import { AssignmentRoutes } from "./routes";
import { config } from "./config";
import { connectDB } from "./config/database/config.database";

const numCPUs = os.cpus().length;

if (cluster.isPrimary) {
  for (let i = 0; i < 1; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  const app: Express = express();
  app.use(express.json());
  app.use("/", AssignmentRoutes);
  const startServer = async () => {
    try {
      await connectDB();
      app.listen(config.PORT, () => {
        console.log(`Server started on port ${config.PORT}`);
      });
    } catch (error) {
      console.log("Redis connection failed");
      console.error("Failed to start server", error);
    }
  };
  startServer();
}
