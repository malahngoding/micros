import { generateSlug } from "random-word-slugs";
import randomstring from "randomstring";
import { prisma } from "./prisma.mjs";

export const initUsers = () => {
  [1, 2, 3, 4, 5, 6].map(async (item) => {
    const dechiperedIdentification = "0.0.432156" + item;
    const provider = "HEDERA";
    await prisma.user.create({
      data: {
        identification: `${dechiperedIdentification}__${provider}`,
        userName: generateSlug(3, {
          partsOfSpeech: ["adjective", "adjective", "noun"],
          categories: {
            adjective: ["color", "appearance", "quantity"],
            noun: ["animals", "thing", "technology"],
          },
        }),
        Profile: {
          create: {
            name: `Test User ${item}`,
            email: `test.email${item}@malahngoding.com`,
            avatar: `${randomstring.generate(14)}`,
            bio: `Created for Test with id ${item}`,
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
