import { RouteHandlerMethod } from 'fastify';

export const getIndex: RouteHandlerMethod = async (_, res) => {
  const responseObject = {
    isServerUp: true,
    date: new Date(),
  };
  return res.send(responseObject);
};
