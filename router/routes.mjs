import * as controllers from "../controllers/index.mjs";

const routes = {
  createHederaMnemonic: {
    method: `POST`,
    url: `/hedera/account/mnemonic`,
    handler: controllers.createHederaMnemonic,
  },
  createHederaAccount: {
    method: `POST`,
    url: `/hedera/account/create`,
    handler: controllers.createHederaAccount,
  },
};

export const renderRoutes = Object.values(routes);
