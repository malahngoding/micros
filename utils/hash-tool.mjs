import CryptoJs from "crypto-js";
import { config } from "../config.mjs";

export const cipher = (text) => {
  return CryptoJs.RC4.encrypt(text.toString(), config.insteadToken).toString();
};

export const decipher = (text) => {
  return CryptoJs.RC4.decrypt(text, config.insteadToken).toString(
    CryptoJs.enc.Utf8
  );
};
