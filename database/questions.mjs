import { prisma } from "./seeds.mjs";

export const allUsers = await prisma.user.count();
