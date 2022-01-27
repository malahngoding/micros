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
          description: true,
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

import Web3 from "web3";

export const mintBadge = async (req, res) => {
  const web3Providers = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
  );
  const web3 = new Web3(web3Providers);
  const result = await web3.eth.getBlockNumber();

  const responseObject = {
    messages: `Hello Future`,
    status: `OK`,
    payload: {
      list: `Latest Ethereum Block is ${result}`,
    },
  };
  return res.send(responseObject);
};
