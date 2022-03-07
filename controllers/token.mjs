import {
  Client,
  TokenCreateTransaction,
  TokenType,
  TokenSupplyType,
  PrivateKey,
  AccountId,
  TokenMintTransaction,
  TokenNftInfoQuery,
  TokenDeleteTransaction,
  TransferTransaction,
  Hbar,
} from "@hashgraph/sdk";
import { generateSlug } from "random-word-slugs";
import { config } from "../config.mjs";

export const createNFT = async (_, res) => {
  const client = Client.forTestnet().setOperator(
    config.accountId,
    config.privateKey
  );

  const treasuryId = AccountId.fromString(config.accountId);
  const treasuryKey = PrivateKey.fromString(config.privateKey);

  const supplyKey = PrivateKey.generate();

  let tokenCreateTx = await new TokenCreateTransaction()
    .setTokenName(
      generateSlug(3, {
        format: `title`,
        partsOfSpeech: ["adjective", "adjective", "noun"],
        categories: {
          adjective: ["color", "appearance", "quantity"],
          noun: ["animals", "thing", "technology"],
        },
      })
    )
    .setTokenSymbol("MNT")
    .setTokenMemo(`Minted from Malah Ngoding Micros at ${new Date()}`)
    .setTokenType(TokenType.NonFungibleUnique)
    .setDecimals(0)
    .setInitialSupply(0)
    .setTreasuryAccountId(treasuryId)
    .setSupplyType(TokenSupplyType.Finite)
    .setMaxSupply(1)
    .setSupplyKey(supplyKey)
    .freezeWith(client);

  let tokenCreateSign = await tokenCreateTx.sign(treasuryKey);
  let tokenCreateSubmit = await tokenCreateSign.execute(client);
  let tokenCreateRx = await tokenCreateSubmit.getReceipt(client);
  let tokenId = tokenCreateRx.tokenId;

  let CID = [
    "bafkreigk33liz6f4s3ggs2n3cis23rnpubj6wiivk7sosezv6gy57sy2fu",
    "bafkreigk33liz6f4s3ggs2n3cis23rnpubj6wiivk7sosezv6gy57sy2fu",
  ];

  // Mint new NFT
  let mintTx = await new TokenMintTransaction()
    .setTokenId(tokenId)
    .setMetadata([Buffer.from(CID)])
    .freezeWith(client);

  let mintTxSign = await mintTx.sign(supplyKey);

  //Submit the transaction to a Hedera network
  let mintTxSubmit = await mintTxSign.execute(client);

  //Get the transaction receipt
  let mintRx = await mintTxSubmit.getReceipt(client);

  const responseObject = {
    messages: `Created NFT`,
    status: `OK`,
    payload: {
      tokenId: `- Created token with ID: ${tokenId}`,
      supplyKey: `${supplyKey}`,
      serial: `${mintRx.serials[0].low}`,
    },
  };
  return res.send(responseObject);
};

export const createFungibleToken = async (req, res) => {
  const client = Client.forTestnet().setOperator(
    config.accountId,
    config.privateKey
  );

  const treasuryId = AccountId.fromString(config.accountId);
  const treasuryKey = PrivateKey.fromString(config.privateKey);

  const supplyKey = PrivateKey.generate();

  let tokenCreateTx = await new TokenCreateTransaction()
    .setTokenName("b5ef6c8b39db0cd25f6f683a1425ec6f Token")
    .setTokenSymbol("MNT")
    .setTokenType(TokenType.FungibleCommon)
    .setDecimals(2)
    .setTokenMemo("b5ef6c8b39db0cd25f6f683a1425ec6f Token")
    .setInitialSupply(10000)
    .setTreasuryAccountId(treasuryId)
    .setSupplyType(TokenSupplyType.Infinite)
    .setSupplyKey(supplyKey)
    .freezeWith(client);

  let tokenCreateSign = await tokenCreateTx.sign(treasuryKey);
  let tokenCreateSubmit = await tokenCreateSign.execute(client);
  let tokenCreateRx = await tokenCreateSubmit.getReceipt(client);
  let tokenId = tokenCreateRx.tokenId;

  const responseObject = {
    messages: `- Created token with ID: ${tokenId}`,
    status: `OK`,
    payload: {
      empty: `${supplyKey}`,
    },
  };

  return res.send(responseObject);
};

export const testFungibleToken = async (_, res) => {
  const client = Client.forTestnet().setOperator(
    config.accountId,
    config.privateKey
  );
  const newAccountId = `0.0.26304439`;
  //Create the transfer transaction
  const sendHbar = await new TransferTransaction()
    .addHbarTransfer(
      AccountId.fromString(config.accountId),
      Hbar.fromTinybars(-1000)
    )
    .addHbarTransfer(newAccountId, Hbar.fromTinybars(1000))
    .execute(client);

  const transactionReceipt = await sendHbar.getReceipt(client);

  const queryCost = await new AccountBalanceQuery()
    .setAccountId(newAccountId)
    .getCost(client);

  const responseObject = {
    messages: `The transfer transaction from faucet account to the ${newAccountId} was: 
      ${transactionReceipt.status.toString()}`,
    status: `OK`,
    payload: {
      transfer: `Transfered 100 HBAR to ${newAccountId}`,
      const: `The cost of query is: ${queryCost}`,
    },
  };

  return res.send(responseObject);
};
