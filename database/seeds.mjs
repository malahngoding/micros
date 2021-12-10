import pkg from "@prisma/client";
import { allProfile, allUsers } from "./main.mjs";

const { PrismaClient } = pkg;
export const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      email: "admin@malahngoding.com",
      name: "Malah Ngoding Bot",
      Profile: {
        create: {
          bio: "Malah Ngoding merupakan platform pembelajaran praktis untuk para pengembang aplikasi web dan mobile yang bersahabat bagi pemula.",
        },
      },
    },
  });
  console.log(allUsers, allProfile);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
