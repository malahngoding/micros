import { generateSlug } from "random-word-slugs";
import randomstring from "randomstring";
import Web3 from "web3";
import { prisma } from "./prisma.mjs";

export const initUsers = () => {
  let web3 = new Web3();
  [1, 2, 3, 4, 5, 6].map(async (item) => {
    const dechiperedIdentification = "0.0.432156" + item;
    const provider = "HEDERA";
    const eth = web3.utils.randomHex(4);
    const randomSlug = () => {
      return generateSlug(3, {
        partsOfSpeech: ["adjective", "adjective", "noun"],
        categories: {
          adjective: ["color", "appearance", "quantity"],
          noun: ["animals", "thing", "technology"],
        },
      });
    };
    await prisma.user.create({
      data: {
        identification: `${dechiperedIdentification}__${provider}`,
        userName: eth,
        Profile: {
          create: {
            name: randomSlug(),
            email: `${randomSlug()}@malahngoding.com`,
            avatar: `${randomstring.generate(14)}`,
            bio: `Created for Test with id ${item}`,
            fresh: true,
          },
        },
        BadgeForUser: {
          create: {
            badgePoolId: 1,
          },
        },
        WalletForUser: {
          create: {
            evm: `0x000000000000000000000000000000000000dEaD`,
            hedera: `${dechiperedIdentification}`,
          },
        },
      },
    });
  });
};
