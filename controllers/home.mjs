import { enigmaEngine } from "../utils/enigma-engine.mjs";

export const homeIndex = async (_, res) => {
  const responseObject = {
    messages: `${enigmaEngine("Hello")}-${enigmaEngine("World")}`,
    status: `OK`,
    payload: {
      empty: true,
    },
  };
  return res.send(responseObject);
};
