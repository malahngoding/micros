import pkg from "@prisma/client";

const { PrismaClient } = pkg;
export const microsPrismaClient = new PrismaClient();
