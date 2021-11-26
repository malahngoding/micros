export const getIndex = async (_, res) => {
  const responseObject = {
    messages: `Get Hello World`,
    status: `OK`,
    data: {
      serverTime: new Date(),
    },
  };
  return res.send(responseObject);
};

export const postIndex = async (_, res) => {
  const responseObject = {
    messages: `Post Hello World`,
    status: `OK`,
    data: {
      serverTime: new Date(),
    },
  };
  return res.send(responseObject);
};
