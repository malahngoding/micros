import type { Context } from "hono";
import { getAllConfig, writeConfig } from "../models/config";

export const getHome = async (c: Context) => {
  const config = await getAllConfig();
  return c.json({
    data: config,
    message: `Loud and Clear`,
    status: `OK`,
  });
};

interface PostHomeBodyRequest {
  key: string;
  value: string;
}

export const postHome = async (c: Context) => {
  const { key, value } = (await c.req.json()) as PostHomeBodyRequest;
  if (key === undefined || value === undefined) {
    c.status(400);
    return c.json({
      data: {},
      message: `Request Malformed`,
      status: `NOT_OK`,
    });
  }
  const config = await writeConfig({ key: key, value: value });
  return c.json({
    data: config,
    message: `Loud and Clear`,
    status: `OK`,
  });
};
