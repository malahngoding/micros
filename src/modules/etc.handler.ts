import { Context } from "hono";
import { getAllConfig } from "../models/config";

export const pingBack = async (c: Context) => {
  const config = await getAllConfig();
  return c.json({
    data: config,
    message: `Loud and Clear`,
    status: `OK`,
  });
};
