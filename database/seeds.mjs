import { initBadge } from "./badge.mjs";
import { allProfile, allUsers } from "./main.mjs";
import { prisma } from "./prisma.mjs";
import { initQuestion } from "./questions.mjs";
import { initUsers } from "./users.mjs";

async function main() {
  await allUsers();
  await allProfile();
  await initBadge();
  await initQuestion();
  await initUsers();
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
