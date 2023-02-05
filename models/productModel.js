import database from "../utils/connectDB.js";

class Product {
  constructor() {}
  static async create(product) {
    const { title, price, description, category, image, rating } = product;
    const rate = rating.rate;
    const count = rating.count;
    const sql = `INSERT INTO products (title, price, description, category, image, rate, count) 
    VALUES (?, ?, ?, ?, ?, ?, ?)`;
    const values = [title, price, description, category, image, rate, count];
    return await database.execute(sql, values);
  }

  static async findAll() {
    return await database.execute("SELECT * FROM products");
  }

  static async findById(id) {
    const result = await database.query(
      `SELECT * FROM products WHERE id = ${id}`
    );
    if (result.length > 0) {
      return result[0][0];
    } else {
      return { message: "No product found with this id" };
    }
  }

  static async finByIdAndDelete(id) {
    const product = await database.execute(
      `SELECT * FROM products WHERE id = ${id}`
    );

    if (product[0].length) {
      return await database.execute(`DELETE FROM products WHERE id = ${id}`);
    } else {
      return null;
    }
  }
}

export default Product;
