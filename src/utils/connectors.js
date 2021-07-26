import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { AbstractConnector } from '@web3-react/abstract-connector'
import { currentNetwork } from "./index";

export const injectedConnector = new InjectedConnector({
  supportedChainIds: [+currentNetwork],
});

export const walletConnector = new WalletConnectConnector({
  rpc: {
    56: "https://bsc-dataseed.binance.org/",
  },
  qrcode: true,
  pollingInterval: 12000
});

export const truewalletConnector = new WalletConnectConnector({
  rpc: {
    56: "https://bsc-dataseed.binance.org/",
  },
  qrcode: true,
  pollingInterval: 12000,
  qrcodeModalOptions: {
    mobileLinks: [
      'trust'
    ]
  },
  clientMeta: {
    name: "TrustWallet"
  }
});

export const resetWalletConnector = (connector) => {
  if (
    connector &&
    connector instanceof WalletConnectConnector &&
    connector.walletConnectProvider?.wc?.uri
  ) {
    connector.walletConnectProvider = undefined
  }
}