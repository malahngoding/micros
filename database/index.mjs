import pkg from "@prisma/client";

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  console.log("Start");
  const allUsers = await prisma.user.count();
  const allPost = await prisma.post.count();
  const allProfile = await prisma.profile.count();

  console.log(allUsers, allPost, allProfile);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
