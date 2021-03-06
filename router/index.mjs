import { auth } from "./auth.mjs";
import { badge } from "./badge.mjs";
import { camps } from "./camps.mjs";
import { content } from "./content.mjs";
import { flashCard } from "./flash-card.mjs";
import { hedera } from "./hedera.mjs";
import { home } from "./home.mjs";
import { profile } from "./profile.mjs";
import { user } from "./user.mjs";
import consola from "../utils/debug.mjs";

const renderRoutes = Object.values({
  ...auth,
  ...badge,
  ...camps,
  ...content,
  ...flashCard,
  ...hedera,
  ...home,
  ...profile,
  ...user,
});

const router = (fastify, opts, next) => {
  fastify.decorateRequest(`user`, null);

  fastify.addHook(`onRequest`, (req, res, next) => {
    consola.info(`onRequest`);
    next();
  });

  renderRoutes.map((route) => fastify.route(route));
  next();
};

export { router };
