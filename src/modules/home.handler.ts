import { FastifyReply, FastifyRequest } from "fastify";

export const getHome = async (req: FastifyRequest, rep: FastifyReply) => {
  console.log(2, new Date());
  const responseObject = {
    messages: `TEST_ECHO`,
    status: `OK`,
    payload: {
      query: req.query,
    },
  };
  return rep.send(responseObject);
};
