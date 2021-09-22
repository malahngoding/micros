import { fastify } from 'fastify';
import cors from 'fastify-cors';
import helmet from 'fastify-helmet';
import { router } from './routes/index';

const app = fastify({
  logger: { level: `info` },
});

app.register(helmet);
app.register(cors, { credentials: true, origin: `http://localhost:3500` });
app.register(router);

export { app };
