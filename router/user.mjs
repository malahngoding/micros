import * as controllers from "../controllers/index.mjs";
import * as middleware from "../middleware/index.mjs";

export const user = {
  getCurrentUser: {
    method: `GET`,
    url: `/getCurrentUser`,
    handler: controllers.getCurrentUser,
    preHandler: [middleware.authenticated],
  },
  checkUserName: {
    method: `POST`,
    url: `/checkUserName`,
    handler: controllers.checkUserName,
    preHandler: [middleware.authenticated],
  },
  editCurrentUserName: {
    method: `POST`,
    url: `/editCurrentUserName`,
    handler: controllers.editCurrentUserName,
    preHandler: [middleware.authenticated],
  },
};
