import * as controllers from "../controllers/index.mjs";

export const flashCard = {
  getFlashCardRanking: {
    method: `GET`,
    url: `/getFlashCardRanking`,
    handler: controllers.getFlashCardRanking,
  },
};
