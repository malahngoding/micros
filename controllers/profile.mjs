import { prisma } from "../database/prisma.mjs";

export const getProfileDetails = async (req, res) => {
  const { assignee } = req;

  const state = await prisma.profile.findUnique({
    where: {
      email: assignee,
    },
  });

  const responseObject = {
    messages: `Hello Future`,
    status: `OK`,
    payload: {
      empty: true,
    },
  };
  return res.send(responseObject);
};

export const updateProfileDetails = async (req, res) => {
  const { assignee } = req;
  const { name, avatar, bio } = req.body;

  await prisma.profile.update({
    where: {
      email: assignee,
    },
    data: {
      name: name,
      avatar: `https://avatars.dicebear.com/api/micah/${avatar}.svg`,
      bio: bio,
    },
  });

  const responseObject = {
    messages: `Hello Future`,
    status: `OK`,
    payload: {
      empty: true,
    },
  };
  return res.send(responseObject);
};
