import dotenv from "dotenv";

dotenv.config();

const config = {
  accountId: process.env.MY_ACCOUNT_ID,
  publicKey: process.env.MY_PUBLIC_KEY,
  privateKey: process.env.MY_PRIVATE_KEY,
  spacesURL: process.env.SPACES_URL,
  microsPort: process.env.MICROS_PORT,
};

export { config };
