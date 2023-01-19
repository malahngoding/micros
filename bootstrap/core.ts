import fastify from "fastify";
import helmet from "@fastify/helmet";
import cors from "@fastify/cors";

import { microsPort, spacesURL } from "@configs";
import { router } from "@routers";

const micros = fastify();
micros.register(helmet, { global: true });
micros.register(cors, { credentials: true, origin: `${spacesURL}` });
micros.register(router);

export const start = async () => {
  try {
    console.log(`Micros started at :${microsPort}`);
    await micros.listen({ port: microsPort });
  } catch (err) {
    micros.log.error(err);
    process.exit(1);
  }
};
