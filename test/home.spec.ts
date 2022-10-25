import tap from "tap";
import { Chain, Wallet } from "../repositories/ledger";

tap.test("Transactions", async (t) => {
  let global: string = `txHash`
  t.test("Create Transactions", async (t) => {
    const satoshi = new Wallet();
    const bob = new Wallet();
    const alice = new Wallet();

    satoshi.sendMoney(50, bob.publicKey);
    bob.sendMoney(23, alice.publicKey);
    alice.sendMoney(5, bob.publicKey);

    console.log(Chain.instance)
  });
});
