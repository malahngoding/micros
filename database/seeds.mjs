import { allProfile, allUsers } from "./main.mjs";
import { prisma } from "./prisma.mjs";

async function main() {
  console.log(allUsers, allProfile);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
