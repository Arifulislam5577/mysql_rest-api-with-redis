import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import productRouter from "./routes/productRoutes.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/products", productRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App is Running at port ${PORT}`);
});
