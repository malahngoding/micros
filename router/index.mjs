import { hedera } from "./hedera.mjs";
import { home } from "./home.mjs";
import { auth } from "./auth.mjs";
import { profile } from "./profile.mjs";

const renderRoutes = Object.values({ ...profile, ...hedera, ...home, ...auth });

const router = (fastify, opts, next) => {
  fastify.decorateRequest(`user`, null);

  fastify.addHook(`onRequest`, (req, res, next) => {
    console.info(`onRequest`);
    next();
  });

  renderRoutes.map((route) => fastify.route(route));
  next();
};

export { router };
