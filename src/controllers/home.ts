import { RouteHandlerMethod } from 'fastify';
import { prisma } from '../utils/prisma';

export const getIndex: RouteHandlerMethod = async (_, res) => {
  const allUsers = await prisma.user.findMany();
  const responseObject = {
    isServerUp: allUsers,
    date: new Date(),
  };
  return res.send(responseObject);
};

export const greet: RouteHandlerMethod = async (_, res) => {
  const allUsers = await prisma.user.findMany();
  return res.send(allUsers);
};
