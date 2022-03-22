import * as controllers from "../controllers/index.mjs";
import * as middleware from "../middleware/index.mjs";

export const camps = {
  getCampsList: {
    method: `GET`,
    url: `/getCampsList`,
    handler: controllers.getCampsList,
  },
  getCampsProgress: {
    method: `POST`,
    url: `/getCampsProgress`,
    handler: controllers.getCampsProgress,
    preHandler: [middleware.authenticated],
  },
};
