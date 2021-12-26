import { prisma } from "../database/prisma.mjs";

export const getProfileDetails = async (req, res) => {
  const { assignee } = req;

  const profile = await prisma.user.findUnique({
    where: {
      identification: assignee,
    },
    select: {
      Profile: {
        select: {
          avatar: true,
          bio: true,
          name: true,
          email: true,
          createdAt: true,
        },
      },
    },
  });

  const responseObject = {
    messages: `Hello Future`,
    status: `OK`,
    payload: {
      avatar: profile.Profile.avatar,
      bio: profile.Profile.bio,
      name: profile.Profile.name,
      email: profile.Profile.email,
      joinedSince: profile.Profile.createdAt,
    },
  };
  return res.send(responseObject);
};

export const updateProfileDetails = async (req, res) => {
  const { assignee } = req;
  const { name, avatar, bio, email } = req.body;

  await prisma.user.update({
    where: {
      identification: assignee,
    },
    data: {
      Profile: {
        update: {
          name: name,
          email: email,
          avatar: avatar,
          bio: bio,
        },
      },
    },
  });

  const responseObject = {
    messages: `Hello Future`,
    status: `OK`,
    payload: {
      avatar: avatar,
      bio: bio,
      name: name,
      email: email,
    },
  };
  return res.send(responseObject);
};
