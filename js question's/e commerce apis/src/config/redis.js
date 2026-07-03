import IORedis from "ioredis";

const redis = new IORedis({
  maxRetriesPerRequest: null,
});

redis.on("connect", () => {
  console.log("Redis Connected");
});

redis.on("error", (err) => {
  console.log(err);
});

export default redis;