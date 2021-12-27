import { prisma } from "../database/prisma.mjs";

export const getBadgeList = async (_, res) => {
  const { assignee } = req;

  const responseObject = {
    messages: `Hello Future`,
    status: `OK`,
    payload: {
      badge: [
        {
          title: `Solidity`,
          description: `Get 10 e 265 QT per second`,
          image: `https://img.rarible.com/prod/video/upload/t_big/prod-itemAnimations/TEZOS-KT18pVpRXKPY2c4U2yFEGSH3ZnhB2kL8kwXS:7301/2f83f515`,
        },
        {
          title: `Pragma`,
          description: `Play the game for 365 days`,
          image: `https://img.rarible.com/prod/video/upload/t_big/prod-itemAnimations/TEZOS-KT18pVpRXKPY2c4U2yFEGSH3ZnhB2kL8kwXS:6060/6c5252e`,
        },
        {
          title: `Facade`,
          description: `Level up your Shield up to level 250.`,
          image: `https://img.rarible.com/prod/video/upload/t_big/prod-itemAnimations/TEZOS-KT18pVpRXKPY2c4U2yFEGSH3ZnhB2kL8kwXS:6958/54fa2f59`,
        },
      ],
    },
  };
  return res.send(responseObject);
};

export const grantBadge = async (req, res) => {
  const responseObject = {
    messages: `Hello Future`,
    status: `OK`,
    payload: {
      badge: [
        {
          title: ``,
          assets: ``,
          description: ``,
        },
      ],
    },
  };
  return res.send(responseObject);
};
