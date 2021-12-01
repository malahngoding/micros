import {
  Client,
  AccountCreateTransaction,
  Mnemonic,
  TopicCreateTransaction,
  TopicMessageSubmitTransaction,
  TopicMessageQuery,
} from "@hashgraph/sdk";
import { config } from "../config.mjs";

export const createHederaMnemonic = async (_, res) => {
  const mnemonic = await Mnemonic.generate();

  const responseObject = {
    messages: `Mnemonic Words Created`,
    status: `OK`,
    data: {
      mnemonicKey: mnemonic.words,
    },
  };
  return res.send(responseObject);
};

export const createHederaAccount = async (req, res) => {
  const client = Client.forTestnet();
  client.setOperator(config.accountId, config.privateKey);

  const mnemonicKey = req.body.mnemonicKey;

  const recoveredMnemonic = await Mnemonic.fromString(mnemonicKey.toString());
  const newAccountPrivateKey = await recoveredMnemonic.toPrivateKey();

  const newAccountPublicKey = newAccountPrivateKey.publicKey;

  const newAccountTransactionResponse = await new AccountCreateTransaction()
    .setTransactionMemo("Account created from malahngoding micros")
    .setKey(newAccountPublicKey)
    .execute(client);

  const getReceipt = await newAccountTransactionResponse.getReceipt(client);
  const newAccountId = getReceipt.accountId;

  const responseObject = {
    messages: `New Hedera Account created`,
    status: `OK`,
    data: {
      accountId: `${newAccountId}`,
      publicKey: `${newAccountPublicKey}`,
      privateKey: `${newAccountPrivateKey}`,
    },
  };
  return res.send(responseObject);
};

export const createHederaTopic = async (req, res) => {
  const client = Client.forTestnet();
  client.setOperator(config.accountId, config.privateKey);

  const transaction = new TopicCreateTransaction();
  const txResponse = await transaction.execute(client);
  const receipt = await txResponse.getReceipt(client);
  const newTopicId = receipt.topicId;

  const responseObject = {
    messages: `Created new consensus topic`,
    status: `OK`,
    data: {
      consensusTopicId: `${newTopicId}`,
    },
  };
  return res.send(responseObject);
};

export const submitMessageToHederaTopic = async (req, res) => {
  const topicId = `0.0.15751106`;

  const client = Client.forTestnet();
  client.setOperator(config.accountId, config.privateKey);

  const objkt = {
    rad: "awesome",
    lad: [1, 2, 3],
  };

  await new TopicMessageSubmitTransaction({
    topicId: topicId,
    message: JSON.stringify(objkt),
  }).execute(client);

  const responseObject = {
    messages: `Message submitted to topic ${topicId}`,
    status: `OK`,
    data: {},
  };
  return res.send(responseObject);
};

export const getMessageFromTopic = async (req, res) => {
  const topicId = `0.0.15751106`;

  const client = Client.forTestnet();
  client.setOperator(config.accountId, config.privateKey);

  let responses = [];

  new TopicMessageQuery()
    .setTopicId(topicId)
    .setStartTime(0)
    .subscribe(client, (message) => {
      console.log(Buffer.from(message.contents, "utf8").toString());
    });

  const responseObject = {
    messages: `Message submitted to topic ${topicId}`,
    status: `OK`,
    data: {
      responses,
    },
  };
  return res.send(responseObject);
};
