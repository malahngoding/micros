import { RouteHandlerMethod } from 'fastify';
import Mdps from 'mdps';
import * as fs from 'fs';
import * as dirName from 'path';
import { watchDog } from '../utils/dog';

export const getContent: RouteHandlerMethod = async (_, res) => {
  let marked: any;
  try {
    const data = fs.readFileSync(
      `${dirName.resolve()}/contents/about-us.md`,
      `utf8`,
    );
    marked = data;
  } catch (err) {
    watchDog.error(JSON.stringify(err));
  }
  const mdps = new Mdps();
  mdps.parse(marked);
  const result = mdps.getResult();
  const responseObject = {
    messages: `Content`,
    status: `OK`,
    data: {
      result,
    },
  };
  return res.send(responseObject);
};
