import { prisma } from "./seeds.mjs";

export const allUsers = await prisma.user.count();
export const allProfile = await prisma.profile.count();
