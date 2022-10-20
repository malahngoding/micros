import type { FastifyInstance } from "fastify";
import { homeRouter } from "./home";

const renderRoutes = Object.values({
  ...homeRouter,
});

const router = (fastify: FastifyInstance, _opts: any, next: () => void) => {
  renderRoutes.map((route) => fastify.route(route));
  next();
};

export { router };
