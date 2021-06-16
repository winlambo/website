import React, { useEffect, useState } from "react";
import { keyframes } from "styled-components";
import { useWeb3React } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import TwoTicket from "../Menu/TwoTicket";
import { injectedConnector } from "../../../utils/connectors";
import { useEagerConnect } from "../../../hooks/useEagerConnect";
import { useInactiveListener } from "../../../hooks/useInactiveListener";
import { getContractObj } from "../../../utils";
import {
  getDailyFund,
  getLamboFund,
  getTicketInfo,
  getViolaPrice,
} from "../../../utils/contracts";
import Luckybx from "./Luckybx";

export interface TicketholderProp {
  heading?: string;
}

const Ticketholder: React.FC<TicketholderProp> = ({ heading }) => {
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

  // connect injected Metamask
  const connectAccount = () => {
    activate(injectedConnector);
  };

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

  const [balance, setBalance] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [nativeTokenPrice, setNativeTokenPrice] = useState(0);
  const [lamboFundAmount, setLamboFundAmount] = useState(0);
  const [dailyFundAmount, setDailyFundAmount] = useState(0);
  const [ticketAmount, setTicketAmount] = useState(0);
  useEffect(() => {
    getViolaPrice(chainId, library?.getSigner())
      .then((violaPrice) => {
        setNativeTokenPrice(violaPrice);
      })
      .catch((e) => {
        setNativeTokenPrice(0);
      });
  }, [chainId, library]);

  useEffect(() => {
    getLamboFund(chainId, library?.getSigner())
      .then((busdAmount) => {
        setLamboFundAmount(busdAmount);
      })
      .catch((e) => {
        setLamboFundAmount(0);
      });
  }, [chainId, library]);

  useEffect(() => {
    getDailyFund(chainId, library?.getSigner())
      .then((busdAmount) => {
        setDailyFundAmount(busdAmount);
      })
      .catch((e) => {
        setDailyFundAmount(0);
      });
  }, [chainId, library]);

  useEffect(() => {
    if (!!account && !!library) {
      const WinLamboContract = getContractObj(
        "WinLambo",
        chainId,
        library.getSigner()
      );
      if (WinLamboContract) {
        getTicketInfo(chainId, account, library)
          .then((tickets) => {
            setTickets(tickets);
            let sum = 0;
            for (let idx = 0; idx < tickets.length; idx++) {
              sum +=
                tickets[idx][1].toNumber() - tickets[idx][0].toNumber() + 1;
            }
            setTicketAmount(sum);
          })
          .catch((e) => {
            setTickets([]);
          });
      }
    }
    return () => {
      setTickets([]);
    };
  }, [account, chainId, library]);
  return (
    <div className="ticketholder">
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
              onClick={!(active && account) ? connectAccount : () => {}}
              style={{ backgroundColor: "transparent" }}
            >
              {active && account ? (
                <div>
                  <h5>Your Wallet</h5>
                  {account}
                </div>
              ) : (
                "Connect"
              )}
            </button>
            <img src="images/mt.svg" alt="Meta" />
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
