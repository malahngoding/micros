import { config } from "../adapters/init";

interface Configs {
  key: string;
  value: string;
}

export async function getAllConfig() {
  return await config.fetch();
}

export async function writeConfig(item: Configs) {
  await config.insert({
    ...item,
  });
}
