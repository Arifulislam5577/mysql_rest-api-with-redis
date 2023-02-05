import express from "express";
import {
  createProduct,
  deleteProduct,
  findProductById,
  getAllProducts,
} from "../controllers/productControllers.js";
import { productCacheMiddleware } from "../middleware/productCache.js";
const productRouter = express.Router();

productRouter
  .route("/")
  .get(productCacheMiddleware, getAllProducts)
  .post(createProduct);
productRouter.route("/:id").get(findProductById).delete(deleteProduct);

export default productRouter;
