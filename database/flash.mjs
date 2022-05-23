import Web3 from "web3";
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
      currentPoint: (1 + item * item * item + 1) ^ item,
      currentGroupName: `The Beginning`,
      currentHash: Web3.utils.randomHex(32),
    })
  );
  await prisma.flashCardUserStats.createMany({
    data: standings,
  });
};
