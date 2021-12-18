import * as controllers from "../controllers/index.mjs";

export const profile = {
  updateName: {
    method: `POST`,
    url: `/updateName`,
    handler: controllers.updateName,
  },
  updateEmail: {
    method: `POST`,
    url: `/updateEmail`,
    handler: controllers.updateEmail,
  },
  updateAvatar: {
    method: `POST`,
    url: `/updateAvatar`,
    handler: controllers.updateAvatar,
  },
  updateBio: {
    method: `POST`,
    url: `/updateBio`,
    handler: controllers.updateBio,
  },
};
