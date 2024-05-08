import initLucid from "./lucid";
// import { Data } from "./lucid/mod.ts";
import { fromText, Lucid, Unit } from "lucid-cardano";
import { Token } from "./types";
// import { getTransactionDetails } from "@/pages/api/blockfrost";

// const aliceAddrress = await lucid.wallet.address();
export const sendCardanoTokens = async (
  sendersAddress: string,
  walletName: string,
  sendersAmount: string,
  cryptoToken: Token,
  recieverAddress: string,
) => {
  console.log("Tokens.....", cryptoToken.assetName);
  const lucid = await initLucid();
  if (lucid && sendersAddress) {
    const amount = BigInt(sendersAmount) * BigInt(1000000);
    let tokenName = fromText(cryptoToken.assetName);
    if (cryptoToken.assetName === "Ada") {
      tokenName = "";
    }
    const token: Unit = cryptoToken.policy_id + tokenName;
    let tx: any;
    console.log("Tokens amount.....", amount);

    if (token !== "") {
      console.log("we have token:.." + fromText(token));
      tx = await lucid.newTx()
        .payToAddress(
          recieverAddress,
          { [token]: BigInt(amount) },
        ).complete();
    } else {
      console.log("we Don't have token:.." + token);
      tx = await lucid.newTx()
        .payToAddress(
          recieverAddress,
          { lovelace: amount },
        ).complete();
    }

    const signedTx = await tx.sign().complete();
    const txHash = await signedTx.submit();

    console.log("Transaction submitted with signedTx:", signedTx);
    console.log("Transaction submitted with id:", txHash);

    return txHash;
  }
};
