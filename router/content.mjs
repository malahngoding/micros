import * as controllers from "../controllers/index.mjs";

export const content = {
  getContents: {
    method: `GET`,
    url: `/getContents/:type`,
    handler: controllers.getContents,
  },
  getContentsPath: {
    method: `GET`,
    url: `/getContentsPath/:type`,
    handler: controllers.getContentsPath,
  },
};
