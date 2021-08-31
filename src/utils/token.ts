export const verifyToken = (token: string) => {
  const verified = {
    isAuth: true,
    token,
  };
  return verified;
};
