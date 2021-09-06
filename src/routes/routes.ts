import { RouteOptions } from 'fastify';
import * as controllers from '../controllers/index';
import * as middleware from '../middleware/index';

type RouteConfig = Record<string, RouteOptions>;

const routes: RouteConfig = {
  home: {
    method: `GET`,
    url: `/`,
    handler: controllers.getIndex,
  },
  greet: {
    method: `GET`,
    url: `/greet`,
    handler: controllers.greet,
  },
  getAllUsers: {
    method: `GET`,
    url: `/users`,
    preHandler: [middleware.validateRequest],
    handler: controllers.getAllUser,
  },
};

export const renderRoutes = Object.values(routes);
