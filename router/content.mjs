import * as controllers from "../controllers/index.mjs";

export const content = {
  getArticles: {
    method: `GET`,
    url: `/getArticles`,
    handler: controllers.getArticles,
  },
  getArticlesPath: {
    method: `GET`,
    url: `/getArticlesPath`,
    handler: controllers.getArticlesPath,
  },
};
