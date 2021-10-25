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

const hederaAcc: string = process.env.ACCOUNT_ID || ``;
const hederaPrivate: string = process.env.PRIVATE_KEY || ``;

export const createHedera: RouteHandlerMethod = async (_, res) => {
  const client = Client.forTestnet();
  client.setOperator(hederaAcc, hederaPrivate);

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
  client.setOperator(hederaAcc, hederaPrivate);

  watchDog.info(hederaAcc);

  const deleteAccount = `0.0.2909109`;

  new AccountDeleteTransaction()
    .setAccountId(deleteAccount)
    .setTransferAccountId(hederaAcc);

  const responseObject = {
    message: `Hello Future!`,
    hedera: `${hederaAcc}`,
    balance: `${deleteAccount} deleted`,
  };
  return res.send(responseObject);
};

export const callHedera: RouteHandlerMethod = async (_, res) => {
  const client = Client.forTestnet();
  client.setOperator(hederaAcc, hederaPrivate);

  watchDog.info(hederaAcc);

  const accountBalance = await new AccountBalanceQuery()
    .setAccountId(hederaAcc)
    .execute(client);

  const responseObject = {
    message: `Hello Future!`,
    hedera: `${hederaAcc}`,
    balance: `${accountBalance.hbars.toTinybars()} tinybars`,
  };
  return res.send(responseObject);
};
