import { FastifyReply, FastifyRequest } from "fastify";
import { putEventOnAxiom } from "../db/axiom-ingest";

export const getHome = async (req: FastifyRequest, rep: FastifyReply) => {
  await putEventOnAxiom();
  const responseObject = {
    messages: `TEST_ECHO`,
    status: `OK`,
    payload: {
      query: req.query,
    },
  };
  return rep.send(responseObject);
};
