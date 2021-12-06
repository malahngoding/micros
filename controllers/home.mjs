export const homeIndex = async (_, res) => {
  const responseObject = {
    messages: `Hello Future`,
    status: `OK`,
    data: {
      serverTime: new Date(),
    },
  };
  return res.send(responseObject);
};
