const Redis = require("ioredis");
import { config } from "../../config";

let redis = new Redis(config.redis.URI);

redis.on("error", function (err: any) {
  console.log(err);
  throw err;
});

redis.on("connect", function () {
  console.log("Redis connected");
});
export { redis };
