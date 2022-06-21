import { enigmaEngine } from "../utils/enigma-engine.mjs";

export const homeIndex = async (_, res) => {
  const responseObject = {
    messages: `Hello ${enigmaEngine("abcde")}-${enigmaEngine("abcdefg")}`,
    status: `OK`,
    payload: {
      empty: true,
    },
  };
  return res.send(responseObject);
};
