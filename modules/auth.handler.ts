import { FastifyReply, FastifyRequest } from "fastify";

export const generateToken = async (req: FastifyRequest, rep: FastifyReply) => {
  const responseObject = {
    messages: `Token Generated`,
    status: `OK`,
    payload: {
      token: `0x0b6fc8911dd4196c17e7a885d38a550762a9ba375560d201b9be57e16fb2cfd2`,
    },
  };
  return rep.send(responseObject);
};
