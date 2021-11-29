import mysql from "mysql2";
import config from "../config.mjs";

export const pool = mysql.createPool({
  host: config.host,
  port: config.port,
  user: config.dbUsername,
  password: config.dbPassword,
  database: config.db,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
