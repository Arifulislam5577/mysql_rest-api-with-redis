import { redisClient } from "../utils/redis.config.js";

export const productCacheMiddleware = async (req, res, next) => {
  try {
    const data = await redisClient.get("products");
    if (data !== null) {
      const products = JSON.parse(data);
      return res.status(200).json(products);
    } else {
      next();
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
