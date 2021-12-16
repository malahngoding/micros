import * as controllers from "../controllers/index.mjs";

export const auth = {
  issueToken: {
    method: `POST`,
    url: `/issueToken`,
    handler: controllers.issueToken,
  },
};
