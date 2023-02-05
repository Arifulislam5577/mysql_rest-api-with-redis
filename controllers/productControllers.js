import PRODUCT from "../models/productModel.js";
import { redisClient } from "../utils/redis.config.js";

export const getAllProducts = async (req, res, next) => {
  try {
    const [products] = await PRODUCT.findAll();
    redisClient.setEx("products", 3600, JSON.stringify(products));
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const findProductById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await PRODUCT.findById(id);
    if (data) {
      return res.status(200).json(data);
    }
    return res.status(404).json({ message: "No product found with this id" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const product = await PRODUCT.create(req.body);
    if (product) {
      res.status(201).json({ message: "Product created successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await PRODUCT.finByIdAndDelete(req.params.id);

    if (deletedProduct) {
      return res.status(200).json({ message: "Product deleted successfully" });
    }

    return res.status(404).json({ message: "No product found with this id" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
