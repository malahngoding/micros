import { auth } from "./auth.mjs";
import { content } from "./content.mjs";
import { hedera } from "./hedera.mjs";
import { home } from "./home.mjs";
import { profile } from "./profile.mjs";
import { badge } from "./badge.mjs";
import { flashCard } from "./flash-card.mjs";

const renderRoutes = Object.values({
  ...profile,
  ...hedera,
  ...home,
  ...auth,
  ...badge,
  ...content,
  ...flashCard,
});

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
