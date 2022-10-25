import * as crypto from "crypto";

export const generateHash = async (): Promise<string> => {
  const str = JSON.stringify(this);
  const hash = crypto.createHash("SHA256");
  hash.update(str).end();
  return hash.digest("hex");
};

export const generateNonce = async (): Promise<void> => {};
