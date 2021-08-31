/* eslint-disable no-shadow */
import { FastifyInstance, FastifyPluginCallback } from 'fastify';
import { watchDog } from '../utils/dog';
import { renderRoutes } from './routes';

export const router: FastifyPluginCallback = (
  fastify: FastifyInstance,
  opts,
  next,
) => {
  fastify.decorateRequest(`user`, null);

  fastify.addHook(`onRequest`, (req, res, next) => {
    watchDog.info(`onRequest`);
    next();
  });

  renderRoutes.map((route) => fastify.route(route));
  next();
};
