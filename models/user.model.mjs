import { microsPrismaClient } from "./prisma.mjs";

export async function getUsers() {
  const users = await microsPrismaClient.user.findMany();
  return users;
}

export async function createUser(email) {
  const status = await microsPrismaClient.user.create({
    data: {
      email: email,
    },
  });
  return status;
}
