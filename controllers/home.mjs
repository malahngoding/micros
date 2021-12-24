export const homeIndex = async (_, res) => {
  const responseObject = {
    messages: `Hello Future`,
    status: `OK`,
    payload: {
      empty: true,
    },
  };
  return res.send(responseObject);
};
