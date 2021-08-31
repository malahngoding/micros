import { onRequestHookHandler } from 'fastify';
import { watchDog } from '../utils/dog';
import { verifyToken } from '../utils/token';

// eslint-disable-next-line consistent-return
export const validateRequest: onRequestHookHandler = async (req, res) => {
  watchDog.info(`Verifying Token`);
  try {
    const auth = req.headers.authorization;
    const token = auth?.replace(`Bearer `, ``) || ``;

    const user = verifyToken(token);
    watchDog.debug(`Verify Token`, user);
  } catch (error) {
    return res.status(401).send({ error: `Unauthorized!` });
  }
};
