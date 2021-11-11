import { RouteOptions } from 'fastify';
import * as controllers from '../controllers/index';
import * as middleware from '../middleware/index';

type RouteConfig = Record<string, RouteOptions>;

const routes: RouteConfig = {
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
  putIndex: {
    method: `PUT`,
    url: `/`,
    handler: controllers.putIndex,
  },
  patchIndex: {
    method: `PATCH`,
    url: `/`,
    handler: controllers.patchIndex,
  },
  deleteIndex: {
    method: `DELETE`,
    url: `/`,
    handler: controllers.deleteIndex,
  },
  getAllUsers: {
    method: `GET`,
    url: `/users`,
    preHandler: [middleware.validateRequest],
    handler: controllers.getAllUser,
  },
  getContent: {
    method: `GET`,
    url: `/content`,
    handler: controllers.getContent,
  },
  callHedera: {
    method: `GET`,
    url: `/hedera`,
    handler: controllers.callHedera,
  },
  createHedera: {
    method: `GET`,
    url: `/hedera/create`,
    handler: controllers.createHedera,
  },
  deleteHedera: {
    method: `GET`,
    url: `/hedera/delete`,
    handler: controllers.deleteHedera,
  },
  testHedera: {
    method: `GET`,
    url: `/hedera/test`,
    handler: controllers.testHedera,
  },
};

export const renderRoutes = Object.values(routes);
