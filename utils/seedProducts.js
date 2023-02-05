import { createConnection } from "mysql2";
import { products } from "./productData.js";
import dotenv from "dotenv";
dotenv.config();

async function insertProducts(products) {
  const connection = createConnection({
    host: process.env.host,
    user: process.env.user,
    database: process.env.database,
    password: process.env.password,
  });

  for (const product of products) {
    const { title, price, description, category, image, rating } = product;
    const rate = rating.rate;
    const count = rating.count;
    const sql = `INSERT INTO products (title, price, description, category, image, rate, count) 
    VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const values = [title, price, description, category, image, rate, count];
    await connection.promise().query(sql, values);
  }

  connection.end();
}

insertProducts(products);
