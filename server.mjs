import fastify from "fastify";
import cors from "fastify-cors";
import helmet from "fastify-helmet";
import fstatic from "fastify-static";

import path from "path";

import { config } from "./config.mjs";
import { router } from "./router/index.mjs";

const server = fastify({
  logger: {
    prettyPrint: {
      translateTime: "SYS:h:MM:ss TT Z o",
      colorize: true,
      ignore: "pid,hostname",
    },
  },
});

let __dirname = path.resolve(path.dirname(""));

server.register(fstatic, {
  root: path.join(__dirname, "public"),
  prefix: "/public/",
});

server.register(helmet);
server.register(cors, { credentials: true, origin: `${config.spacesURL}` });
server.register(router);

export default server;
