import { FastifyReply, FastifyRequest } from 'fastify';

export const getHome = async (_req: FastifyRequest, rep: FastifyReply) => {
	const numberOfUser = 1;
	const responseObject = {
		messages: `Success`,
		status: `OK`,
		payload: {
			registeredUser: `Current registered users ${numberOfUser}`
		}
	};
	return rep.send(responseObject);
};
