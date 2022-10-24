import { cockroachdb } from "../adapters/prisma";

interface User {
  name: string;
  email: string;
}

export const countCurrentUsers = async (): Promise<any> => {
  const count = await cockroachdb.user.count();
  return count;
};

export const createUser = async (data: User): Promise<void> => {
  await cockroachdb.user.create({
    data: {
      name: data.name,
      email: data.email,
    },
  });
};

export const createUserBulk = async (data: User[]): Promise<void> => {
  await cockroachdb.user.createMany({
    data: data,
  });
};
