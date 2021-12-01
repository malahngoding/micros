import * as controllers from "../controllers/index.mjs";

const routes = {
  createHederaMnemonic: {
    method: `POST`,
    url: `/createHederaMnemonic`,
    handler: controllers.createHederaMnemonic,
  },
  createHederaAccount: {
    method: `POST`,
    url: `/createHederaAccount`,
    handler: controllers.createHederaAccount,
  },
  createHederaTopic: {
    method: `POST`,
    url: `/createHederaTopic`,
    handler: controllers.createHederaTopic,
  },
  submitMessageToHederaTopic: {
    method: `POST`,
    url: `/submitMessageToHederaTopic`,
    handler: controllers.submitMessageToHederaTopic,
  },
  getMessageFromTopic: {
    method: `POST`,
    url: `/getMessageFromTopic`,
    handler: controllers.getMessageFromTopic,
  },
  homeIndex: {
    method: `GET`,
    url: `/`,
    handler: controllers.homeIndex,
  },
};

export const renderRoutes = Object.values(routes);
