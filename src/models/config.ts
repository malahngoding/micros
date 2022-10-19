import { config } from "../db/init";

interface Config {
  key: string;
  value: string;
}

export async function getAllConfig() {
  return await config.fetch();
}

export async function writeConfig(item: Config) {
  await config.insert({
    ...item,
  });
}
