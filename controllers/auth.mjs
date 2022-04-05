import CryptoJs from "crypto-js";
import randomstring from "randomstring";
import { generateSlug } from "random-word-slugs";
import * as jose from "jose";
import { createSecretKey } from "crypto";

import { prisma } from "../database/prisma.mjs";
import { config } from "../config.mjs";
import { badgeCoronation } from "../utils/badge-hook.mjs";

export const issueToken = async (req, res) => {
  const { identification, provider, name, email } = req.body;

  const bytes = CryptoJs.AES.decrypt(identification, config.insteadToken);
  const dechiperedIdentification = bytes.toString(CryptoJs.enc.Utf8);

  const user = await prisma.user.findUnique({
    where: {
      identification: `${dechiperedIdentification}__${provider}`,
    },
    select: {
      identification: true,
      Profile: true,
    },
  });

  if (!user) {
    await prisma.user.create({
      data: {
        identification: `${dechiperedIdentification}__${provider}`,
        userName: generateSlug(3, {
          format: `camel`,
          partsOfSpeech: ["adjective", "adjective", "noun"],
          categories: {
            adjective: ["color", "appearance", "quantity"],
            noun: ["animals", "thing", "technology"],
          },
        }),
        Profile: {
          create: {
            name: name,
            email: email,
            avatar: `${randomstring.generate(14)}`,
            bio: ``,
          },
        },
        WalletForUser: {
          create: {
            evm: name.startsWith(`0x`) ? name : ``,
            hedera: name.startsWith(`0.`) ? name : ``,
          },
        },
      },
    });

    await badgeCoronation(`${dechiperedIdentification}__${provider}`, 1);

    const data = {
      id: `${dechiperedIdentification}__${provider}`,
    };

    const secretKey = createSecretKey(config.insteadToken);

    const token = await new jose.EncryptJWT(data)
      .setProtectedHeader({ alg: "dir", enc: "A256GCM" })
      .setIssuedAt()
      .setIssuer(config.microsURL)
      .setAudience(config.spacesURL)
      .setExpirationTime("2h")
      .encrypt(secretKey);

    const responseObject = {
      messages: `Token issued`,
      status: `OK`,
      payload: {
        token: `instead_${token}`,
      },
    };

    return res.send(responseObject);
  } else {
    const data = {
      id: `${dechiperedIdentification}__${provider}`,
    };

    const secretKey = createSecretKey(config.insteadToken);

    const token = await new jose.EncryptJWT(data)
      .setProtectedHeader({ alg: "dir", enc: "A256GCM" })
      .setIssuedAt()
      .setIssuer(config.microsURL)
      .setAudience(config.spacesURL)
      .setExpirationTime("2h")
      .encrypt(secretKey);

    const responseObject = {
      messages: `Token issued`,
      status: `OK`,
      payload: {
        token: `instead_${token}`,
      },
    };
    return res.send(responseObject);
  }
};
