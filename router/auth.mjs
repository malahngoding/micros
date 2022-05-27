import * as controllers from "../controllers/index.mjs";
import * as middleware from "../middleware/index.mjs";

export const auth = {
  issueToken: {
    method: `POST`,
    url: `/issueToken`,
    handler: controllers.issueToken,
    preHandler: [middleware.internal],
  },
};
