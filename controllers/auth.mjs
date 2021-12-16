import CryptoJs from "crypto-js";
import randomstring from "randomstring";
import { generateSlug } from "random-word-slugs";

import { prisma } from "../database/prisma.mjs";
import { config } from "../config.mjs";

export const issueToken = async (req, res) => {
  const { identification, provider } = req.body;

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

  console.log(randomstring.generate(14));

  if (!user) {
    await prisma.user.create({
      data: {
        identification: `${dechiperedIdentification}__${provider}`,
        Profile: {
          create: {
            name: generateSlug(3, {
              format: `title`,
              partsOfSpeech: ["adjective", "adjective", "noun"],
              categories: {
                adjective: ["color", "appearance", "quantity"],
                noun: ["animals", "thing", "technology"],
              },
            }),
            email: `${generateSlug(2, {
              format: `kebab`,
              partsOfSpeech: ["adjective", "noun"],
              categories: {
                adjective: ["color", "appearance", "quantity"],
                noun: ["animals", "thing", "technology"],
              },
            })}@malahngoding.com`,
            avatar: `https://avatars.dicebear.com/api/open-peeps/${randomstring.generate(
              14
            )}.svg`,
            bio: "",
          },
        },
      },
    });
  }

  const data = {
    id: dechiperedIdentification,
    name: user.Profile.name,
    email: user.Profile.email,
    avatar: user.Profile.avatar,
    bio: user.Profile.bio,
    joinedSince: user.Profile.createdAt,
  };

  const ciphertext = CryptoJs.AES.encrypt(
    JSON.stringify(data),
    config.insteadToken
  ).toString();

  const responseObject = {
    messages: `Token issued`,
    status: `OK`,
    payload: {
      token: `instead_${ciphertext}`,
    },
  };
  return res.send(responseObject);
};
