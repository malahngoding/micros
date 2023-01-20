import { getHome } from "@controllers";
import type { HTTPMethods } from "fastify";

export const homeRouter = {
  "/home": {
    method: "GET" as HTTPMethods,
    url: "/home",
    handler: getHome,
  },
};
