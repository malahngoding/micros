import * as controllers from "../controllers/index.mjs";

const routes = {
  getIndex: {
    method: `GET`,
    url: `/`,
    handler: controllers.getIndex,
  },
  postIndex: {
    method: `POST`,
    url: `/`,
    handler: controllers.postIndex,
  },
};

export const renderRoutes = Object.values(routes);
