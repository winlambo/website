import React, { useState, useRef, createRef, useEffect } from "react";
import { Web3Provider } from "@ethersproject/providers";
import Countdown from "react-countdown";
import Wincol from "./Wincol";
import Ticketholder from "./Ticketholder";
import { useWeb3React } from "@web3-react/core";
import {
  getLamboRandomNumber,
  getWinningNumber,
  isWinner,
} from "../../../utils/contracts";
const Completionist = () => <span></span>; //<span>Refresh your page!</span>;
const Dailydraw: React.FC = () => {
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
  const [winningNumber, setWinningNumber] = useState("");

  return (
    <section className="daily-draw">
      <div className="container">
        <div className="header">
          <div className="lg1">
            <img src="images/car-engine.png" alt="Logo" className="wlogo" />
            <h1>THE "DAILY" DRAW</h1>
          </div>

          <div className="date">
            <div>Daily at 16:00 UTC</div>
            <Countdown date="">
              <Completionist />
            </Countdown>
          </div>
        </div>
        <div className="wintickets">
          <Wincol rank={1} amount={12000} />
          <Wincol rank={2} amount={7000} />
          <Wincol rank={3} amount={2000} />
        </div>
        <Ticketholder heading={"Your Daily Volume Tickets"} />
        <div className="luckyholderouter">
          <h3>Lucky Holders</h3>
          <div className="luckyholder">
            <div className="luckyholderbx ">
              <div>123456789</div>
              <div className="coloredval">$25</div>
            </div>
            <div className="luckyholderbx ">
              <div>123456789</div>
              <div className="coloredval">$25</div>
            </div>
            <div className="luckyholderbx ">
              <div>123456789</div>
              <div className="coloredval">$25</div>
            </div>
            <div className="luckyholderbx ">
              <div>123456789</div>
              <div className="coloredval">$25</div>
            </div>
          </div>
        </div>
        <Ticketholder heading={"Your Lambo Holder Tickets"} />

        <img src="images/lambo3.png" className="drawcar" alt="lambo" />
      </div>
    </section>
  );
};

export default Dailydraw;
