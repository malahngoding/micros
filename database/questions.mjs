import { prisma } from "./prisma.mjs";

export const initQuestion = async () => {
  await prisma.questionGroup.createMany({
    data: [
      {
        groupName: "Pertambahan",
        questionTag: "Dasar|Pertambahan|Test",
      },
    ],
  });
  await prisma.questionDetail.createMany({
    data: [
      {
        questionString: "1 + 1 =",
        questionGroupId: 1,
      },
      {
        questionString: "2 + 3 =",
        questionGroupId: 1,
      },
      {
        questionString: "4 + 5 =",
        questionGroupId: 1,
      },
    ],
  });
  await prisma.questionAnswer.createMany({
    data: [
      { answerString: "2", isCorrect: true, order: 1, questionDetailId: 1 },
      { answerString: "3", isCorrect: false, order: 2, questionDetailId: 1 },
      { answerString: "4", isCorrect: false, order: 3, questionDetailId: 1 },
      { answerString: "5", isCorrect: false, order: 4, questionDetailId: 1 },
      { answerString: "4", isCorrect: false, order: 1, questionDetailId: 2 },
      { answerString: "5", isCorrect: true, order: 2, questionDetailId: 2 },
      { answerString: "6", isCorrect: false, order: 3, questionDetailId: 2 },
      { answerString: "7", isCorrect: false, order: 4, questionDetailId: 2 },
      { answerString: "7", isCorrect: false, order: 1, questionDetailId: 3 },
      { answerString: "8", isCorrect: false, order: 2, questionDetailId: 3 },
      { answerString: "9", isCorrect: true, order: 3, questionDetailId: 3 },
      { answerString: "10", isCorrect: false, order: 4, questionDetailId: 3 },
    ],
  });
};
