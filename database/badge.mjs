import { prisma } from "./prisma.mjs";

export const initBadge = async () =>
  await prisma.badgePool.createMany({
    data: [
      {
        title: `Solidity`,
        description: `Get 10 e 265 QT per second`,
        media: `https://img.rarible.com/prod/video/upload/t_big/prod-itemAnimations/TEZOS-KT18pVpRXKPY2c4U2yFEGSH3ZnhB2kL8kwXS:7301/2f83f515`,
      },
      {
        title: `Pragma`,
        description: `Play the game for 365 days`,
        media: `https://img.rarible.com/prod/video/upload/t_big/prod-itemAnimations/TEZOS-KT18pVpRXKPY2c4U2yFEGSH3ZnhB2kL8kwXS:6060/6c5252e`,
      },
      {
        title: `Facade`,
        description: `Level up your Shield up to level 250.`,
        media: `https://img.rarible.com/prod/video/upload/t_big/prod-itemAnimations/TEZOS-KT18pVpRXKPY2c4U2yFEGSH3ZnhB2kL8kwXS:6958/54fa2f59`,
      },
    ],
  });
