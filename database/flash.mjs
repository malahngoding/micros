import { prisma } from "./prisma.mjs";

export const initFlash = async () => {
  let standings = [];
  [1, 2, 3, 4, 5, 6].map((item) =>
    standings.push({
      userId: item,
      finishedGroupQuestion: 10,
      answeredQuestion: 10,
      skippedQuestion: 10,
      correctAnswer: 100,
      wrongAnswer: 10,
      accuracy: 99.99,
      currentPoint: item * item * item,
      currentHash: "0xhashhashhash",
    })
  );
  await prisma.flashCardUserStats.createMany({
    data: standings,
  });
};
