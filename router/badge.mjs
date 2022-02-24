import * as controllers from "../controllers/index.mjs";
import * as middleware from "../middleware/index.mjs";

export const badge = {
  getBadgeList: {
    method: `GET`,
    url: `/getBadgeList`,
    handler: controllers.getBadgeList,
    preHandler: [middleware.authenticated],
  },
};
