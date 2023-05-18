import fastify from 'fastify';
import helmet from '@fastify/helmet';
import cors from '@fastify/cors';

import { microsPort, microsURL, spacesPORT, spacesURL } from '@configs';
import { router } from '@routers';

const micros = fastify({ logger: true });
micros.register(helmet, { global: true });
micros.register(cors, { credentials: true, origin: `${spacesURL}:${spacesPORT}` });
micros.register(router);

export const start = async () => {
	try {
		console.log(`Micros started at ${microsURL}:${microsPort}`);
		await micros.listen({ port: microsPort });
	} catch (err) {
		micros.log.error(err);
		process.exit(1);
	}
};
