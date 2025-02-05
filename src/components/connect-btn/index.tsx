import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useBalance } from "wagmi";
import { baseSepolia } from "viem/chains";

export const CustomBtnApp: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openChainModal,
        openConnectModal,
        openAccountModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        const { data: balanceData, isLoading: isBalanceLoading } = useBalance({
          address: account?.address as `0x${string}`,
          chainId: baseSepolia.id,
        });

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <button
                    className={className}
                    onClick={openConnectModal}
                    type="button"
                  >
                    Connect Wallet
                  </button>
                );
              }
              if (chain.unsupported) {
                return (
                  <button
                    className={className}
                    onClick={openChainModal}
                    type="button"
                  >
                    Wrong Network
                  </button>
                );
              }
              return (
                <button
                  onClick={openAccountModal}
                  className={`${className} hover:bg-gray-100 transition-colors `}
                >
                  <div className="flex">
                    <span className="mr-2">
                      {account.address.substring(0, 6)}...
                      {account.address.substring(account.address.length - 4)}
                    </span> 
                    <span className="mx-2">|</span>
                    <span>
                      {isBalanceLoading
                        ? "Loading..."
                        : `${parseFloat(balanceData?.formatted || "0").toFixed(
                            4
                          )} ETH`}
                    </span>
                  </div>
                </button>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};