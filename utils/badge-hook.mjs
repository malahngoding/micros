import { prisma } from "../database/prisma.mjs";

export const badgeCoronation = async (awardee, type) => {
  const user = await prisma.user.findUnique({
    where: {
      identification: awardee,
    },
    select: {
      id: true,
      BadgeForUser: {
        select: {
          badgePoolId: true,
        },
      },
    },
  });
  const duplicate = user.BadgeForUser.some(
    (badgeForUser) => badgeForUser.badgePoolId === type
  );
  if (!duplicate) {
    await prisma.badgeForUser.create({
      data: {
        userId: user.id,
        badgePoolId: type,
      },
    });
  }
};
