import { prisma } from "./prisma.mjs";

export const initBadge = async () =>
  await prisma.badgePool.createMany({
    data: [
      {
        title: `New Joiner`,
        descriptionEn: `Becoming Meta Malah Ngoding member`,
        descriptionId: `Menjadi anggota Malah ngoding Meta`,
        media: `https://siasky.net/fAQ90kcs2RrGHOoJNxPnXCAjSdhxJFPgsp6Rjki916mOKw`,
        type: `MOVING`,
      },
      {
        title: `Pragma`,
        descriptionEn: `Activate Hedera Hashgraph™ Activity`,
        descriptionId: `Mengaktifasi Hedera Hashgraph™`,
        media: `https://siasky.net/vANfXGvHhcpYxQPjBOgcCMhRpjSfzg2pW14qhhUJa5qipA`,
        type: `MOVING`,
      },
      {
        title: `Facade`,
        descriptionEn: `Start your first Flash Card session`,
        descriptionId: `Memulai sesi Flash Card untuk pertama kali`,
        media: `https://siasky.net/AADA0HbgoQTDOIrybmDHJcw4vVzaaX4Y7pORcqi-quRd2A`,
        type: `MOVING`,
      },
    ],
  });
