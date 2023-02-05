import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();
const db = mysql.createPool({
  host: process.env.host,
  user: process.env.user,
  database: process.env.database,
  password: process.env.password,
});

export default db.promise();
