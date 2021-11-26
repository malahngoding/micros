import fastify from "fastify";
import cors from "fastify-cors";
import helmet from "fastify-helmet";

import { config } from "./config.mjs";
import { router } from "./router/index.mjs";

const server = fastify({
  logger: { level: `info` },
});

server.register(helmet);
server.register(cors, { credentials: true, origin: `${config.spaceURL}` });
server.register(router);

export { server };
