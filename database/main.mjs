import { prisma } from "./prisma.mjs";

export const allUsers = await prisma.user.count();
export const allProfile = await prisma.profile.count();
