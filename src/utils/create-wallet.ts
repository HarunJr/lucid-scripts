import initLucid from "./lucid";

// There are multiple ways to generate a wallet in Lucid
//1: Generate Private Key (It’s suitable for advanced users who need to perform operations directly with the private key.
// However, it’s less convenient for backup and recovery because you need to securely store the private key itself.)
export const createPrivateKeyWallet = async () => {
  const lucid = await initLucid();
  const privateKey = lucid.utils.generatePrivateKey();
  lucid.selectWalletFromPrivateKey(privateKey);
  console.log("Generated Selected Private Key: ", privateKey);

  const walletAddress = lucid.wallet.address();
  console.log("Wallet Address From PrivateKey: ", walletAddress);

  // Return both privateKey and pKeyAddress
  return { privateKey, walletAddress };
};

//2: Generate Seed phrases. ( This is a more user-friendly option as it’s a mnemonic phrase.
// It’s easier to backup and recover since you only need to remember the phrase). It’s generally considered better for most users,
// especially if you plan to manage multiple addresses or need to recover your wallet in the future.
export const createSeedPhraseWallet = async () => {
  const lucid = await initLucid();
  if (lucid) {
    const seed = lucid.utils.generateSeedPhrase();
    lucid.selectWalletFromSeed(seed);
    console.log("Generated Seed Phrase: ", seed);

    const walletAdress = lucid.wallet.address();
    console.log("Wallet Address From Seed Phrase: ", walletAdress);

    return { seed, walletAdress };
  }
};
