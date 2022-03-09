import * as jose from "jose";
import { createSecretKey } from "crypto";
import { config } from "../config.mjs";

export const authenticated = async (req, res) => {
  const secretKey = createSecretKey(config.insteadToken);

  try {
    const insteadToken = req.headers.authorization;
    const token = insteadToken.replace("Bearer instead_", "");

    const { payload, protectedHeader } = await jose.jwtDecrypt(
      token,
      secretKey,
      {
        issuer: config.microsURL,
        audience: config.spacesURL,
      }
    );

    req.assignee = payload.id;
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
