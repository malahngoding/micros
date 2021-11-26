import { Client, AccountCreateTransaction, Mnemonic } from "@hashgraph/sdk";
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
