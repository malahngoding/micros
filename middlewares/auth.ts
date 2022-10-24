import type { Context, Next } from "hono";

export const privateServerAuthenticated = async (c: Context, next: Next) => {
  console.log("Server to Server");
  await next();
};
