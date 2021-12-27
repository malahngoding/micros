import { prisma } from "./prisma.mjs";

export const initQuestion = async () => await prisma.user.count();
