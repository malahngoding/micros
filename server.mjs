import fastify from "fastify";
import cors from "fastify-cors";
import helmet from "fastify-helmet";
import fstatic from "fastify-static";

import path from "path";

import { config } from "./config.mjs";
import { router } from "./router/index.mjs";

const server = fastify({
  logger: { level: `info` },
});

let __dirname = path.resolve(path.dirname(""));

server.register(fstatic, {
  root: path.join(__dirname, "public"),
  prefix: "/public/",
});

server.register(helmet);
server.register(cors, { credentials: true, origin: `${config.spaceURL}` });
server.register(router);

export default server;
