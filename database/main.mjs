import { prisma } from "./prisma.mjs";

export const allUsers = async () => await prisma.user.count();
export const allProfile = async () => await prisma.profile.count();
