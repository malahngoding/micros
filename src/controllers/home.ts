import { RouteHandlerMethod } from 'fastify';

export const getIndex: RouteHandlerMethod = async (_, res) => {
  const responseObject = {
    messages: `Get Hello World`,
    status: `OK`,
    data: {
      serverTime: new Date(),
    },
  };
  return res.send(responseObject);
};

export const postIndex: RouteHandlerMethod = async (req, res) => {
  const requestBody = req.body as { messages: string };
  if (requestBody !== null) {
    const responseObject = {
      messages: `Hello World ${requestBody.messages}`,
      status: `OK`,
      data: {
        serverTime: new Date(),
      },
    };
    return res.send(responseObject);
  }
  const responseError = {
    messages: `There is an error in your request`,
    status: `ERROR`,
    data: {},
  };
  return res.code(400).send(responseError);
};

export const putIndex: RouteHandlerMethod = async (req, res) => {
  const requestBody = req.body as { messages: string };
  if (requestBody !== null) {
    const responseObject = {
      messages: `Hello World ${requestBody.messages}`,
      status: `OK`,
      data: {
        serverTime: new Date(),
      },
    };
    return res.send(responseObject);
  }
  const responseError = {
    messages: `Your request is malformed`,
    status: `ERROR`,
    data: {},
  };
  return res.code(400).send(responseError);
};

export const patchIndex: RouteHandlerMethod = async (req, res) => {
  const requestBody = req.body as { messages: string };
  if (requestBody !== null) {
    const responseObject = {
      messages: `Hello World ${requestBody.messages}`,
      status: `OK`,
      data: {
        serverTime: new Date(),
      },
    };
    return res.send(responseObject);
  }
  const responseError = {
    messages: `There is an error in your request`,
    status: `ERROR`,
    data: {},
  };
  return res.code(400).send(responseError);
};

export const deleteIndex: RouteHandlerMethod = async (req, res) => {
  const requestBody = req.query as { id: string };
  if (requestBody !== null) {
    const responseObject = {
      messages: `Hello ${requestBody.id} is deleted!`,
      status: `OK`,
      data: {
        serverTime: new Date(),
      },
    };
    return res.send(responseObject);
  }
  const responseError = {
    messages: `There is an error in your request`,
    status: `ERROR`,
    data: {},
  };
  return res.code(400).send(responseError);
};
