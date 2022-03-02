import { prisma } from "./prisma.mjs";

export const initBadge = async () =>
  await prisma.badgePool.createMany({
    data: [
      {
        title: `New Joiner`,
        descriptionEn: `Becoming Meta Malah Ngoding member`,
        descriptionId: `Menjadi anggota Malah ngoding Meta`,
        media: `https://img.rarible.com/prod/video/upload/t_big/prod-itemAnimations/TEZOS-KT18pVpRXKPY2c4U2yFEGSH3ZnhB2kL8kwXS:7301/2f83f515`,
      },
      {
        title: `Pragma`,
        descriptionEn: `Activate Hedera Hashgraph™ Activity`,
        descriptionId: `Mengaktifasi Hedera Hashgraph™`,
        media: `https://img.rarible.com/prod/video/upload/t_big/prod-itemAnimations/TEZOS-KT18pVpRXKPY2c4U2yFEGSH3ZnhB2kL8kwXS:6060/6c5252e`,
      },
      {
        title: `Facade`,
        descriptionEn: `Start your first Flash Card session`,
        descriptionId: `Memulai sesi Flash Card untuk pertama kali`,
        media: `https://img.rarible.com/prod/video/upload/t_big/prod-itemAnimations/TEZOS-KT18pVpRXKPY2c4U2yFEGSH3ZnhB2kL8kwXS:6958/54fa2f59`,
      },
    ],
  });
