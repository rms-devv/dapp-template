import { useEffect, useState } from "react";
import { multicall } from "@wagmi/core";
import {  exampleContract, web3Config } from "../config";

export const useExampleContract = (
  account: `0x${string}`,
  refresh: any,
  update: any
) => {
  const [data, setData] = useState({
    balanceOfUser: BigInt(0),
  });

  useEffect(() => {
    const fetch = async () => {
      const res = await multicall(web3Config, {
        contracts: [
          {
            ...exampleContract,
            functionName: "balanceOf",
            args: [account],
          },
        ],
      });
      setData({
        balanceOfUser: res[0].result as bigint,
      });
    };
    if (account) fetch();
  }, [account, refresh, update]);
  return data;
};
