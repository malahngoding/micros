import {
  Client,
  PrivateKey,
  AccountCreateTransaction,
  AccountBalanceQuery,
  Hbar,
  AccountDeleteTransaction,
} from '@hashgraph/sdk';
import { RouteHandlerMethod } from 'fastify';
import { watchDog } from '../utils/dog';

const hederaAccountID: string = process.env.ACCOUNT_ID || ``;
const hederaPrivateKey: string = process.env.PRIVATE_KEY || ``;

export const createHedera: RouteHandlerMethod = async (_, res) => {
  const client = Client.forTestnet();
  client.setOperator(hederaAccountID, hederaPrivateKey);

  const newAccountPrivateKey = PrivateKey.generate();
  const newAccountPublicKey = newAccountPrivateKey.publicKey;

  const newAccountTransactionResponse = await new AccountCreateTransaction()
    .setKey(newAccountPublicKey)
    .setInitialBalance(Hbar.fromTinybars(1000))
    .execute(client);

  const getReceipt = await newAccountTransactionResponse.getReceipt(client);

  const newAccountId = getReceipt.accountId || ``;

  const accountBalance = await new AccountBalanceQuery()
    .setAccountId(newAccountId)
    .execute(client);

  const responseObject = {
    message: `Hello Future!`,
    hedera: `${newAccountId}`,
    balance: `${accountBalance.hbars.toTinybars()} tinybars`,
  };
  return res.send(responseObject);
};

export const deleteHedera: RouteHandlerMethod = async (_, res) => {
  const client = Client.forTestnet();
  client.setOperator(hederaAccountID, hederaPrivateKey);

  watchDog.info(hederaAccountID);

  const deleteAccount = `0.0.2909109`;

  new AccountDeleteTransaction()
    .setAccountId(deleteAccount)
    .setTransferAccountId(hederaAccountID);

  const responseObject = {
    message: `Hello Future!`,
    hedera: `${hederaAccountID}`,
    balance: `${deleteAccount} deleted`,
  };
  return res.send(responseObject);
};

export const callHedera: RouteHandlerMethod = async (_, res) => {
  const client = Client.forTestnet();
  client.setOperator(hederaAccountID, hederaPrivateKey);

  watchDog.info(hederaAccountID);

  const accountBalance = await new AccountBalanceQuery()
    .setAccountId(hederaAccountID)
    .execute(client);

  const responseObject = {
    message: `Hello Future!`,
    hedera: `${hederaAccountID}`,
    balance: `${accountBalance.hbars.toTinybars()} tinybars`,
  };
  return res.send(responseObject);
};
