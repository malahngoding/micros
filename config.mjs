import dotenv from "dotenv";

dotenv.config();

const config = {
  accountId: process.env.MY_ACCOUNT_ID,
  publicKey: process.env.MY_PUBLIC_KEY,
  privateKey: process.env.MY_PRIVATE_KEY,
  spacesURL: process.env.SPACES_URL,
  microsPort: process.env.MICROS_PORT,
  database: process.env.DB_CONNECTION,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  db: process.env.DB_DATABASE,
  dbUsername: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
};

export { config };
