import pkg from "@prisma/client";

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

async function main() {
  await prisma.post.create({
    data: {
      title: "Malah Ngoding",
      content: "Lupa Makan, Lupa Tidur, Malah Ngoding",
      User: {
        create: {
          email: "micros@malahngoding.com",
          name: "Malah Ngoding Bot",
          Profile: {
            create: {
              bio: "Malah Ngoding merupakan platform pembelajaran praktis untuk para pengembang aplikasi web dan mobile yang bersahabat bagi pemula",
            },
          },
        },
      },
    },
  });
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
