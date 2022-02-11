import * as controllers from "../controllers/index.mjs";
import * as middleware from "../middleware/index.mjs";

export const flashCard = {
  getFlashCardRanking: {
    method: `GET`,
    url: `/getFlashCardRanking`,
    handler: controllers.getFlashCardRanking,
  },
  getCurrentUserFlashCardStatus: {
    method: `POST`,
    url: `/getCurrentUserFlashCardStatus`,
    handler: controllers.getCurrentUserFlashCardStatus,
    preHandler: [middleware.authenticated],
  },
};
