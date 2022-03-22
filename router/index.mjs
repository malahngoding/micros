import { auth } from "./auth.mjs";
import { badge } from "./badge.mjs";
import { camps } from "./camps.mjs";
import { content } from "./content.mjs";
import { flashCard } from "./flash-card.mjs";
import { hedera } from "./hedera.mjs";
import { home } from "./home.mjs";
import { profile } from "./profile.mjs";

const renderRoutes = Object.values({
  ...auth,
  ...badge,
  ...camps,
  ...content,
  ...flashCard,
  ...hedera,
  ...home,
  ...profile,
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
