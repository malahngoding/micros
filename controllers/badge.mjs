import { prisma } from "../database/prisma.mjs";

export const getBadgeList = async (req, res) => {
  const { assignee } = req;
  const user = await prisma.user.findUnique({
    where: {
      identification: assignee,
    },
    select: {
      id: true,
    },
  });
  const badge = await prisma.badgeForUser.findMany({
    where: { userId: user.id },
    select: {
      badge: {
        select: {
          title: true,
          descriptionEn: true,
          descriptionId: true,
          type: true,
          media: true,
          createdAt: true,
        },
      },
    },
  });
  const responseObject = {
    messages: `Hello Future`,
    status: `OK`,
    payload: {
      list: badge,
    },
  };
  return res.send(responseObject);
};
