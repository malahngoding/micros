import {
  Client,
  Hbar,
  TokenCreateTransaction,
  TokenType,
} from "@hashgraph/sdk";
import { config } from "../config.mjs";

export const createNFT = async (_, res) => {
  const client = Client.forTestnet();
  client.setOperator(config.accountId, config.privateKey);

  const treasuryAccountId = config.accountId;
  const treasuryKey = config.privateKey;
  const adminKey = config.privateKey;

  const nftCreate = await new TokenCreateTransaction()
    .setTokenName("Your Token Name")
    .setTokenSymbol("F")
    .setTokenType(TokenType.FungibleCommon)
    .setTreasuryAccountId(treasuryAccountId)
    .setMaxTransactionFee(new Hbar(30))
    .freezeWith(client);

  const nftCreateSign = await nftCreate.sign(adminKey);
  const nftCreateSubmit = await nftCreateSign.execute(client);
  const nftCreateReceipt = await nftCreateSubmit.getReceipt(client);

  const responseObject = {
    messages: `Mnemonic Words Created`,
    status: `OK`,
    payload: {},
  };
  return res.send(responseObject);
};
