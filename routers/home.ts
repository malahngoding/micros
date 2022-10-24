import { getHome } from "../modules/home.handler";
import type { HTTPMethods } from "fastify";

export const homeRouter = {
  "/api/ping": {
    method: "GET" as HTTPMethods,
    url: `/api/ping`,
    handler: getHome,
  },
};
