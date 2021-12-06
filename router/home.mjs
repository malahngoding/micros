import * as controllers from "../controllers/index.mjs";

export const home = {
  homeIndex: {
    method: `GET`,
    url: `/`,
    handler: controllers.homeIndex,
  },
};
