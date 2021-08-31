import { RouteHandlerMethod } from 'fastify';

export const getAllUser: RouteHandlerMethod = async (_, res) => {
  const responseObject = {
    user: true,
    date: new Date(),
  };
  return res.send(responseObject);
};
