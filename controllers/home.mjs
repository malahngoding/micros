export const postIndex = async (_, res) => {
  const responseObject = {
    messages: `Hello World`,
    status: `OK`,
    data: {
      serverTime: new Date(),
    },
  };
  return res.send(responseObject);
};
