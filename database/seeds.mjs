import { initBadge } from "./badge.mjs";
import { initFlash } from "./flash.mjs";
import { allProfile, allUsers } from "./main.mjs";
import { prisma } from "./prisma.mjs";
import { initQuestion } from "./questions.mjs";
import { initUsers } from "./users.mjs";

async function main() {
  await allUsers();
  await allProfile();
  await initBadge();
  await initQuestion();
  initUsers();
  await initFlash();
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
