import express from "express";
import {
  createProduct,
  deleteProduct,
  findById,
  getAllProducts,
} from "../controllers/productControllers.js";
const productRouter = express.Router();

productRouter.route("/").get(getAllProducts).post(createProduct);
productRouter.route("/:id").get(findById).delete(deleteProduct);

export default productRouter;
