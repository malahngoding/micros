import * as controllers from "../controllers/index.mjs";
import * as middleware from "../middleware/index.mjs";

export const home = {
  homeIndex: {
    method: `GET`,
    url: `/`,
    handler: controllers.homeIndex,
    onResponse: [middleware.badgeCoronation],
  },
};
