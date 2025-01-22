import { exampleContract, web3Config } from "@/config";
import { waitForTransactionReceipt } from "@wagmi/core";
import { erc20Abi } from "viem";

export const approve = async (
  writeContractAsync: (params: any) => Promise<any>,
  addressToken: string
) => {
  try {
    const tx = await writeContractAsync({
      address: addressToken,
      abi: erc20Abi,
      functionName: "approve",
      args: [
        exampleContract.address,
        "111111111111111111111111111111111111111111111111111111111111111111111",
      ],
    });

    const result = await waitForTransactionReceipt(web3Config, {
      hash: tx,
    });

    if (result.status === "success") {
      return tx;
    }
    return false;
  } catch (e) {
    return false;
  }
};
