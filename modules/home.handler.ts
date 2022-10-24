import { FastifyReply, FastifyRequest } from "fastify";
import { countCurrentUsers } from "../repositories/user";

export const getHome = async (_req: FastifyRequest, rep: FastifyReply) => {
  const numberOfUser = await countCurrentUsers();
  const responseObject = {
    messages: `Success`,
    status: `OK`,
    payload: {
      registeredUser: `Current registered users ${numberOfUser}`,
    },
  };
  return rep.send(responseObject);
};
