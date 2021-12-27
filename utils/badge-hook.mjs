import { prisma } from "../database/prisma.mjs";

export const badgeCoronation = async (awardee, type) => {
  console.log(awardee, type);
  const user = await prisma.user.findUnique({
    where: {
      identification: awardee,
    },
    select: {
      id: true,
    },
  });
  await prisma.badgeForUser.create({
    data: {
      userId: user.id,
      badgePoolId: type,
    },
  });
};
