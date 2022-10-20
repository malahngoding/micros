import type { FastifyInstance } from "fastify";
import { authRouter } from "./auth";
import { homeRouter } from "./home";

const renderRoutes = Object.values({
  ...authRouter,
  ...homeRouter,
});

const router = (fastify: FastifyInstance, _opts: any, next: () => void) => {
  renderRoutes.map((route) => fastify.route(route));
  next();
};

export { router };
