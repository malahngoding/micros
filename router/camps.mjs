import * as controllers from "../controllers/index.mjs";
import * as middleware from "../middleware/index.mjs";

export const camps = {
  getBadgeList: {
    method: `GET`,
    url: `/getCampsList`,
    handler: controllers.getCampsList,
    preHandler: [middleware.authenticated],
  },
};
