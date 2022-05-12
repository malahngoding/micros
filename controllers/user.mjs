import { prisma } from "../database/prisma.mjs";

export const getCurrentUser = async (req, res) => {
  const assignee = req.assignee;
  const activeUser = await prisma.user.findUnique({
    where: {
      identification: assignee,
    },
    select: {
      userName: true,
    },
  });
  const responseObject = {
    messages: `Hello Current User`,
    status: `OK`,
    payload: {
      ...activeUser,
    },
  };
  return res.send(responseObject);
};

export const checkUserName = async (req, res) => {
  const newUserName = req.body.newUserName;
  const response = await prisma.user.count({
    where: {
      userName: newUserName,
    },
  });
  if (response === 0) {
    const responseObject = {
      messages: `Hello, the username ${newUserName} is available`,
      status: `OK`,
      payload: {
        available: true,
      },
    };
    return res.send(responseObject);
  }
  const errorObject = {
    messages: `Hello, the username ${newUserName} is not available`,
    status: `NOT_OK`,
    payload: {
      available: false,
    },
  };
  return res.send(errorObject);
};

export const editCurrentUserName = async (req, res) => {
  const newUserName = req.newUserName;
  const assignee = req.assignee;
  await prisma.user.update({
    where: {
      identification: assignee,
    },
    update: {
      userName: newUserName,
    },
  });
  const responseObject = {
    messages: `Hello ${newUserName}`,
    status: `OK`,
    payload: {
      newUserName: true,
    },
  };
  return res.send(responseObject);
};
