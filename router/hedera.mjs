import * as controllers from "../controllers/index.mjs";
import * as middleware from "../middleware/index.mjs";

export const hedera = {
  createHederaMnemonic: {
    method: `POST`,
    url: `/createHederaMnemonic`,
    handler: controllers.createHederaMnemonic,
    preHandler: [middleware.authenticated],
  },
  createHederaAccount: {
    method: `POST`,
    url: `/createHederaAccount`,
    handler: controllers.createHederaAccount,
    preHandler: [middleware.authenticated],
  },
  createHederaTopic: {
    method: `POST`,
    url: `/createHederaTopic`,
    handler: controllers.createHederaTopic,
    preHandler: [middleware.authenticated],
  },
  submitMessageToHederaTopic: {
    method: `POST`,
    url: `/submitMessageToHederaTopic`,
    handler: controllers.submitMessageToHederaTopic,
    preHandler: [middleware.authenticated],
  },
  getMessageFromTopic: {
    method: `POST`,
    url: `/getMessageFromTopic`,
    handler: controllers.getMessageFromTopic,
    preHandler: [middleware.authenticated],
  },
  createNFT: {
    method: `POST`,
    url: `/createNFT`,
    handler: controllers.createNFT,
    preHandler: [middleware.authenticated],
  },
  createFungibleToken: {
    method: `POST`,
    url: `/createFungibleToken`,
    handler: controllers.createFungibleToken,
    preHandler: [middleware.authenticated],
  },
  testFungibleToken: {
    method: `POST`,
    url: `/testFungibleToken`,
    handler: controllers.testFungibleToken,
    preHandler: [middleware.authenticated],
  },
};
