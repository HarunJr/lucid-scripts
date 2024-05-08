// types.ts
export interface Token {
  tokenAsset: string;
  policy_id: string;
  assetName: string;
  assetQuant: number;
  isNFT?: boolean; // Optional property to indicate if the asset is an NFT
  origin?: string;
}

export const cryptoList: Token[] = [
  {
    tokenAsset: "",
    policy_id: "",
    assetName: "USDT",
    assetQuant: 0,
    origin: "Ethereum",
  },
  {
    tokenAsset: "",
    policy_id: "",
    assetName: "USDC",
    assetQuant: 0,
    origin: "Ethereum",
  },
  {
    tokenAsset: "",
    policy_id: "",
    assetName: "CUSD",
    assetQuant: 0,
    origin: "Ethereum",
  },
  {
    tokenAsset: "",
    policy_id: "",
    assetName: "DJED",
    assetQuant: 0,
    origin: "Cardano",
  },
  {
    tokenAsset: "",
    policy_id: "",
    assetName: "USDM",
    assetQuant: 0,
    origin: "Cardano",
  },
  {
    tokenAsset: "",
    policy_id: "",
    assetName: "iUSD",
    assetQuant: 0,
    origin: "Cardano",
  },
  {
    tokenAsset: "",
    policy_id: "",
    assetName: "SAT",
    assetQuant: 0,
    origin: "Ordinals",
  },
  {
    tokenAsset: "",
    policy_id: "",
    assetName: "BTC",
    assetQuant: 0,
    origin: "Bitcoin",
  },
  {
    tokenAsset: "",
    policy_id: "",
    assetName: "ETH",
    assetQuant: 0,
    origin: "Ethereum",
  },
  {
    tokenAsset: "",
    policy_id: "",
    assetName: "ADA",
    assetQuant: 0,
    origin: "Cardano",
  },
  {
    tokenAsset: "",
    policy_id: "",
    assetName: "SOL",
    assetQuant: 0,
    origin: "Solana",
  },
  {
    tokenAsset: "",
    policy_id: "",
    assetName: "BNB",
    assetQuant: 0,
    origin: "Binance",
  },
  {
    tokenAsset: "",
    policy_id: "",
    assetName: "MATIC",
    assetQuant: 0,
    origin: "Polygon",
  },
];

export const fiatList: Token[] = [
  {
    tokenAsset: "fiat",
    policy_id: "",
    assetName: "USD",
    assetQuant: 0,
    origin: "USA",
  },
  {
    tokenAsset: "fiat",
    policy_id: "",
    assetName: "KES",
    assetQuant: 0,
    origin: "Kenya",
  },
  {
    tokenAsset: "fiat",
    policy_id: "",
    assetName: "GHS",
    assetQuant: 0,
    origin: "Ghana",
  },
  {
    tokenAsset: "fiat",
    policy_id: "",
    assetName: "UGX",
    assetQuant: 0,
    origin: "Uganda",
  },
  {
    tokenAsset: "fiat",
    policy_id: "",
    assetName: "TZS",
    assetQuant: 0,
    origin: "Tanzania",
  },
  {
    tokenAsset: "fiat",
    policy_id: "",
    assetName: "NGN",
    assetQuant: 0,
    origin: "Nigeria",
  },
  {
    tokenAsset: "fiat",
    policy_id: "",
    assetName: "ZAR",
    assetQuant: 0,
    origin: "South Africa",
  },
  {
    tokenAsset: "fiat",
    policy_id: "",
    assetName: "ZWD",
    assetQuant: 0,
    origin: "Zimbabwe",
  },
];
