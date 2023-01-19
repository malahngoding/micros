import { getHome } from "@controllers";
import type { HTTPMethods } from "fastify";

export const homeRouter = {
  "/api/ping": {
    method: "GET" as HTTPMethods,
    url: "/ping",
    handler: getHome,
  },
};
