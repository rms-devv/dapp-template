import { useEffect } from "react";
import { useAccount } from "wagmi";
import { watchAccount } from "@wagmi/core";
import { web3Config } from "@/config";
import { useUserStore } from "@/stores/User/useAuthStore";
import { showErrorToast, showSuccessToast } from "@/utils/toast/showToasts";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { address } = useAccount();
  const { setAddress } = useUserStore();

  // Set address when component mounts or when address changes
  useEffect(() => {
    if (address) {
      setAddress(address as `0x${string}`);
      showSuccessToast({
        title: "Wallet Connected",
        description: `Connected to ${address.substring(0, 6)}...${address.substring(
          address.length - 4
        )}`,
      });
    } else {
      setAddress(null);
      showErrorToast({
        title: "Wallet Disconnected",
        description: "Please connect your wallet",
      });
    }
  }, [address, setAddress]);

  // Watch for address changes via MetaMask
  useEffect(() => {
    const unwatch = watchAccount(web3Config, {
      onChange: (account) => {
        const newAddress = account?.address;
        if (newAddress) {
          setAddress(newAddress as `0x${string}`);
          showSuccessToast({
            title: "Account Changed",
            description: `Switched to ${newAddress.substring(
              0,
              6
            )}...${newAddress.substring(newAddress.length - 4)}`,
          });
        } else {
          setAddress(null);
          showErrorToast({
            title: "Wallet Disconnected",
            description: "Please connect your wallet",
          });
        }
      },
    });

    return () => {
      unwatch();
    };
  }, [setAddress]);

  return <>{children}</>;
};