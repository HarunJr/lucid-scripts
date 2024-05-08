import { Blockfrost, Lucid } from "lucid-cardano";

const initLucid = async () => {
  const lucid = await Lucid.new(
    new Blockfrost(
      process.env.NEXT_PUBLIC_BLOCKFROST_API as string,
      process.env.NEXT_PUBLIC_BLOCKFROST as string,
    ),
    "Preprod",
  );

  return lucid;
};

export default initLucid;
