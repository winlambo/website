import React, { useEffect, useState, useRef } from "react";
import { keyframes } from "styled-components";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { BigNumber } from "ethers";
import TwoTicket from "../Menu/TwoTicket";
import { injectedConnector } from "../../../utils/connectors";
import { useEagerConnect } from "../../../hooks/useEagerConnect";
import { useInactiveListener } from "../../../hooks/useInactiveListener";
import Wallets from '../Popup/Wallets';

export interface TicketholderProp {
  heading?: string;
  tickets: BigNumber[][];
}

const Ticketholder: React.FC<TicketholderProp> = ({ heading, tickets }) => {
  const context = useWeb3React<Web3Provider>();
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,
  } = context;

  const walletRef = useRef(null)

  function walletModal(){
    // @ts-ignore
    walletRef.current.openModal();
  }

  useEffect(() => {
    if (account && walletRef.current) {
         // @ts-ignore
        walletRef.current.closeModal();
    }
  }, [account]);

  // handle logic to recognize the connector currently being activated
  const [activatingConnector, setActivatingConnector] = React.useState();
  useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]);

  // mount only once or face issues :P
  const [triedEager] = useEagerConnect();
  useInactiveListener(!triedEager || !!activatingConnector);

  return (
    <div className="ticketholder">
      <Wallets ref={walletRef} />
      <div className="ticketheader">
        <h4>{heading}</h4>
        <div className="wallet">
          <div className="wallet-inner">
            <button
              className={
                active && account
                  ? "btn-main btn-transparent"
                  : "btn-main btn-black m-0"
              }
              onClick={!(active && account) ? walletModal : () => {}}
              // style={{ backgroundColor: "transparent" }}
            >
              {active && account ? (
                <div>
                  <h5>Your Wallet</h5>
                  {account}
                </div>
              ) : (
                "Connect wallet"
              )}
            </button>
            {/* <img src="images/mt.svg" alt="Meta" /> */}
          </div>
        </div>
      </div>
      <div className="ticketheaderticket">
        {active && account ? <TwoTicket tickets={tickets} /> : ""}
      </div>
    </div>
  );
};

export default Ticketholder;
