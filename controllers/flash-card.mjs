import { generateSlug } from "random-word-slugs";
import { prisma } from "../database/prisma.mjs";
import { badgeCoronation } from "../utils/badge-hook.mjs";
import { cipher, decipher } from "../utils/hash-tool.mjs";

export const getFlashCardRanking = async (_, res) => {
  const rankings = await prisma.flashCardUserStats.findMany({
    select: {
      user: {
        select: {
          userName: true,
          Profile: {
            select: {
              avatar: true,
            },
          },
        },
      },
      currentPoint: true,
    },
  });
  console.table(rankings);
  const list = [
    {
      rank: 1,
      userName: generateSlug(2, { format: "title" }),
      avatar: `Test User`,
      score: `10000`,
    },
  ];
  const responseObject = {
    messages: `Hello FlashCard List`,
    status: `OK`,
    payload: {
      ranks: list,
    },
  };
  return res.send(responseObject);
};

export const getCurrentUserFlashCardStatus = async (_, res) => {
  const hash = cipher(1);
  const responseObject = {
    messages: `Hello FlashCard Stats`,
    status: `OK`,
    payload: {
      stats: {
        finishedGroupQuestion: 0.1,
        answeredQuestion: 0.1,
        skippedQuestion: 0.1,
        correctAnswer: 0.1,
        wrongAnswer: 0.1,
        accuracy: 0.1,
        currentPoint: 150,
        currentHash: hash,
      },
    },
  };
  return res.send(responseObject);
};

export const getCurrentFlashCardBlock = async (req, res) => {
  const hash = req.params.hash;
  const assignee = req.assignee;

  const flashCardBadgeId = 3;
  await badgeCoronation(assignee, flashCardBadgeId);

  const currentId = parseInt(decipher(hash));
  const data = await prisma.questionGroup.findUnique({
    where: {
      id: currentId,
    },
    select: {
      id: true,
      groupName: true,
      questionTag: true,
      QuestionDetail: {
        select: {
          questionGroupId: true,
          questionString: true,
          QuestionAnswer: {
            select: {
              order: true,
              answerString: true,
              isCorrect: true,
            },
          },
        },
      },
    },
  });

  const responseObject = {
    messages: `Hello FlashCard Question Block`,
    status: `OK`,
    payload: {
      groupName: data.groupName,
      questions: data,
    },
  };
  return res.send(responseObject);
};
