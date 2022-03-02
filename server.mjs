import fastify from "fastify";
import cors from "fastify-cors";
import helmet from "fastify-helmet";
import fstatic from "fastify-static";
import fastifyRequestLogger from "@mgcrea/fastify-request-logger";
import prettifier from "@mgcrea/pino-pretty-compact";

import path from "path";

import { config } from "./config.mjs";
import { router } from "./router/index.mjs";

const server = fastify({
  logger: {
    prettyPrint: true,
    prettifier,
  },
  disableRequestLogging: true,
});

let __dirname = path.resolve(path.dirname(""));

server.register(fstatic, {
  root: path.join(__dirname, "public"),
  prefix: "/public/",
});

server.register(fastifyRequestLogger);
server.register(helmet);
server.register(cors, { credentials: true, origin: `${config.spacesURL}` });
server.register(router);

export default server;
