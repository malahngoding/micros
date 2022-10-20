import fastify, { FastifyReply, FastifyRequest } from "fastify";
import helmet from "@fastify/helmet";
import cors from "@fastify/cors";

import { microsPort, spacesURL } from "./environments";
import { router } from "../routers/main";

const micros = fastify();
micros.register(helmet, { global: true });
micros.register(cors, { credentials: true, origin: `${spacesURL}` });
micros.register(router);

export const start = async () => {
  try {
    await micros.listen({ port: microsPort });
  } catch (err) {
    micros.log.error(err);
    process.exit(1);
  }
};
