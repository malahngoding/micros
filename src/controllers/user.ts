import { RouteHandlerMethod } from 'fastify';
import { prisma } from '../utils/prisma';

export const getAllUser: RouteHandlerMethod = async (_, res) => {
  const allUsers = await prisma.user.findMany();

  const responseObject = {
    user: allUsers,
    date: new Date(),
  };
  return res.send(responseObject);
};
