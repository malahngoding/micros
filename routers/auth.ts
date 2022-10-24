import type { HTTPMethods } from "fastify";
import { generateToken } from "../modules/auth.handler";

export const authRouter = {
  "/api/auth/token": {
    method: "POST" as HTTPMethods,
    url: `/api/auth/token`,
    handler: generateToken,
  },
};
