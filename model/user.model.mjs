import { prisma } from "../database/prisma.mjs";

export const findUserByIdentification = async (identification) => {
  return await prisma.user.findUnique({
    where: {
      identification: identification,
    },
    select: {
      identification: true,
      Profile: true,
    },
  });
};

export const createUser = async () => {
  return await prisma.user.create({
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
          fresh: true,
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
};
