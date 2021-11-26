const fastify = require("fastify")({ logger: true });

fastify.route({
  method: "GET",
  url: "/",
  schema: {
    querystring: {
      name: { type: "string" },
    },
    response: {
      200: {
        type: "object",
        properties: {
          hello: { type: "string" },
        },
      },
    },
  },
  preHandler: async (request, reply) => {
    // E.g. check authentication
  },
  handler: async (request, reply) => {
    return {
      hello: {
        ...request,
      },
    };
  },
});

const start = async () => {
  try {
    await fastify.listen(4000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
