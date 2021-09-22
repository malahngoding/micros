// To Migrate :
// ╰─ npx prisma migrate dev --name init

// To Seed :
// ╰─ npx prisma db seed --preview-feature

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import { watchDog } from '../src/utils/dog';

const prisma = new PrismaClient();

async function main() {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(`developer`, salt);
  await prisma.account.upsert({
    where: {
      uuid: `41a6f10f-351e-4191-b4ce-bcc55b4d2a0d`,
    },
    update: {},
    create: {
      uuid: `41a6f10f-351e-4191-b4ce-bcc55b4d2a0d`,
      identifier: `bot@malahngoding.com`,
      authProvider: `credentials`,
      password: hash,
      profile: {
        create: {
          email: `bot@malahngoding.com`,
          name: `Instead Bot`,
          bio: `Malah Ngoding merupakan platform pembelajaran praktis untuk para pengembang aplikasi web dan mobile yang bersahabat bagi pemula.`,
        },
      },
    },
  });

  await prisma.config.upsert({
    where: {
      key: `version`,
    },
    update: {},
    create: {
      key: `version`,
      value: `0.0.5`,
    },
  });

  await prisma.project.create({
    data: {
      projectName: `Malah Ngoding`,
      accountId: 1,
      Schema: {
        create: {
          accountId: 1,
          schemaName: `Articles`,
          SchemaField: {
            createMany: {
              data: [
                { fieldName: `title`, fieldType: `String` },
                { fieldName: `title`, fieldType: `String` },
                { fieldName: `title`, fieldType: `String` },
              ],
            },
          },
        },
      },
    },
  });
}

main()
  .catch((e) => {
    watchDog.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
