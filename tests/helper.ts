import { app } from '../src/app';
import { prisma } from '../src/utils/prisma';

beforeAll(async () => app.ready());

afterAll(async () => {
  await app.close();
  return prisma.$disconnect();
});

export { app };
