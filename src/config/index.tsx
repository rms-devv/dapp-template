import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { erc20Abi } from "viem";
import { baseSepolia } from "viem/chains";
import { http } from "wagmi";

export const web3Config = getDefaultConfig({
  appName: "Dapp-Template", // Application name (e.g., "MyDApp")
  projectId: "Dapp-Template", // RainbowKit project ID
  chains: [baseSepolia as any],
  ssr: false,
  transports: {
    [baseSepolia.id]: http(), // replace baseSepolia base with the desired chain
  },
});

export const exampleContract = {
  address: "0x", // Contract address
  abi: erc20Abi as any, // ERC20 ABI
} as const;
