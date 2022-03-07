import * as controllers from "../controllers/index.mjs";
import * as middleware from "../middleware/index.mjs";

export const profile = {
  updateProfileDetails: {
    method: `POST`,
    url: `/updateProfileDetails`,
    handler: controllers.updateProfileDetails,
    preHandler: [middleware.authenticated],
  },
  getProfileDetails: {
    method: `POST`,
    url: `/getProfileDetails`,
    handler: controllers.getProfileDetails,
    preHandler: [middleware.authenticated],
  },
  getProfileWallets: {
    method: `GET`,
    url: `/getProfileWallets`,
    handler: controllers.getProfileWallets,
    preHandler: [middleware.authenticated],
  },
};
