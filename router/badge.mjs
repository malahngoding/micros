import * as controllers from "../controllers/index.mjs";
import * as middleware from "../middleware/index.mjs";

export const badge = {
  getBadgeList: {
    method: `GET`,
    url: `/getBadgeList`,
    handler: controllers.homeIndex,
    preHandler: [middleware.authenticated],
  },
  grantBadge: {
    method: `POST`,
    url: `/grantBadge`,
    handler: controllers.homeIndex,
    preHandler: [middleware.authenticated],
  },
};
