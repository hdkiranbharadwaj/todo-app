import pg from "pg";
import env from "dotenv";
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "perntodo",
  password: process.env.PASSWORD,
  port: 5432,
});
export default db;
