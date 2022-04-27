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
    orderBy: {
      currentPoint: `desc`,
    },
    take: 6,
  });
  const responseObject = {
    messages: `Hello FlashCard List`,
    status: `OK`,
    payload: {
      rankings,
    },
  };
  return res.send(responseObject);
};

export const getCurrentUserFlashCardStatus = async (req, res) => {
  const hash = cipher(1);
  const assignee = req.assignee;

  const user = await prisma.user.findUnique({
    where: {
      identification: assignee,
    },
    select: {
      id: true,
    },
  });
  const currentStats = await prisma.flashCardUserStats.findUnique({
    where: {
      userId: user.id,
    },
    select: {
      finishedGroupQuestion: true,
      answeredQuestion: true,
      skippedQuestion: true,
      correctAnswer: true,
      wrongAnswer: true,
      accuracy: true,
      currentPoint: true,
      currentHash: true,
    },
  });
  if (currentStats === null) {
    await prisma.flashCardUserStats.create({
      data: {
        userId: user.id,
        finishedGroupQuestion: 0,
        answeredQuestion: 0,
        skippedQuestion: 0,
        correctAnswer: 0,
        wrongAnswer: 0,
        accuracy: 0,
        currentPoint: 0,
        currentHash: hash,
      },
    });

    const responseObject = {
      messages: `Hello FlashCard Stats`,
      status: `OK`,
      payload: {
        stats: {
          finishedGroupQuestion: 0,
          answeredQuestion: 0,
          skippedQuestion: 0,
          correctAnswer: 0,
          wrongAnswer: 0,
          accuracy: 0,
          currentPoint: 0,
          currentHash: hash,
        },
      },
    };
    return res.send(responseObject);
  }

  const responseObject = {
    messages: `Hello FlashCard Stats`,
    status: `OK`,
    payload: {
      stats: currentStats,
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
