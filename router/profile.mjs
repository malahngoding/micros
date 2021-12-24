import * as controllers from "../controllers/index.mjs";
import * as middleware from "../middleware/index.mjs";

export const profile = {
  updateProfileDetails: {
    method: `POST`,
    url: `/updateProfileDetails`,
    handler: controllers.updateProfileDetails,
    preHandler: [middleware.authenticated],
  },
};
