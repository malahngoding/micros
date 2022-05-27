import { config } from "../config.mjs";

export const internal = async (req, res) => {
  const insteadToken = req.headers.authorization;
  if (`instead_${config.insteadToken}` === insteadToken) {
    req.respect = "Mad Respect";
  } else {
    return res.status(401).send({
      messages: `Unauthorized!`,
      status: `NOT_OK`,
      payload: {
        empty: true,
      },
    });
  }
};
