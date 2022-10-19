import type { Context } from "hono";

interface GenerateTokenBodyRequest {
  key: string;
  value: string;
}

export const generateToken = async (c: Context) => {
  const { key, value } = (await c.req.json()) as GenerateTokenBodyRequest;
  if (key === undefined || value === undefined) {
    c.status(400);
    return c.json({
      data: {},
      message: `Request Malformed`,
      status: `NOT_OK`,
    });
  }
  const getToken = () => {
    return `0x242b8d754e9f17836f7483595d232efb5bad10d3c257699b14a8c5f959a349110a1a0a65117990483c5e035b2a44261e`;
  };
  return c.json({
    data: {
      token: getToken(),
    },
    message: `Loud and Clear`,
    status: `OK`,
  });
};
