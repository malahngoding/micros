import { getHome } from "../modules/home.handler";
import type { HTTPMethods } from "fastify";
import type { FastifyRequest } from "fastify";
import type { FastifyReply } from "fastify";

const preHandler = async (
  request: FastifyRequest,
  reply: FastifyReply,
  next: any
) => {
  console.log(1, new Date());

  next();
};

export const homeRouter = {
  "/api/ping": {
    method: "GET" as HTTPMethods,
    url: `/api/ping`,
    handler: getHome,
    preHandler: [preHandler],
  },
};
