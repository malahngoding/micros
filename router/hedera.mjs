import * as controllers from "../controllers/index.mjs";

export const hedera = {
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
  createNFT: {
    method: `POST`,
    url: `/createNFT`,
    handler: controllers.createNFT,
  },
};
