import CryptoJs from "crypto-js";
import { config } from "../config.mjs";

export const authenticated = async (req, res) => {
  try {
    const theToken = req.headers.authorization;
    const bytes = CryptoJs.AES.decrypt(
      theToken.replace("Bearer instead_", ""),
      config.insteadToken
    );
    const decryptedData = JSON.parse(bytes.toString(CryptoJs.enc.Utf8));

    req.assignee = decryptedData.id;
  } catch (error) {
    const responseObject = {
      messages: `Unauthorized!`,
      status: `NOT_OK`,
      payload: {
        empty: true,
      },
    };
    return res.status(401).send(responseObject);
  }
};
