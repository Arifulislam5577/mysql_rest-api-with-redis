import redis from "redis";
const REDIS_PORT = process.env.REDIS_PORT || 6379;

export const redisClient = redis.createClient(REDIS_PORT);
redisClient.on("error", (err) => console.log("Redis Client Error", err));

new Promise((resolve, reject) => {
  redisClient.connect((err) => {
    if (err) {
      reject(err);
    } else {
      resolve();
    }
  });
});
