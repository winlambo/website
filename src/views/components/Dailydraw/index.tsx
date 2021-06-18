import React, { useState, useRef, createRef, useEffect } from "react";
import { Web3Provider } from "@ethersproject/providers";
import Countdown from "react-countdown";
import Wincol from "./Wincol";
import Ticketholder from "./Ticketholder";
import Rankheader from "./Rankheader";
import { useWeb3React } from "@web3-react/core";
import {
  get14WinningNumber,
  get4LuckyHolders,
  getDailyFund,
  getDailyVolumeTicketsByAccount,
  getRandomNumbers,
  getTicketInfo,
  getTop3PotTicketMembers,
} from "../../../utils/contracts";
const Completionist = () => <span></span>; 
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
  const [winningNumbers, setWinningNumbers] = useState<any>([]);
  const [accountWinNumber, setAccountWinningNumber] = useState(0);
  const [topTicketMembers, setTopTicketMembers] = useState<any>([]);
  const [dailyVolumeTickets, setDailyVolumeTickets] = useState<any>([]);
  const [holderTickets, setHolderTickets] = useState<any>([]);
  const [dailyJackpotAmount, setDailyJackpotAmount] = useState(0);
  const [luckyHolders, setLuckyHolders] = useState<any>([]);

  useEffect(() => {
    getTop3PotTicketMembers(chainId, library?.getSigner())
      .then((members) => {
        setTopTicketMembers(members);
      })
      .catch((e) => {
        console.log(e);
        setTopTicketMembers([]);
      });

    getDailyFund(chainId, library?.getSigner())
      .then((busdAmount) => {
        setDailyJackpotAmount((busdAmount * 5) / 100);
      })
      .catch((e) => {
        console.log(e);
      });

    if (!!account && !!library) {
      getDailyVolumeTicketsByAccount(account, chainId, library?.getSigner())
        .then((tickets) => {
          setDailyVolumeTickets(tickets);
        })
        .catch((e) => {
          console.log(e);
        });

      getTicketInfo(chainId, account, library?.getSigner())
        .then((tickets) => {
          if (tickets) setHolderTickets(tickets);
        })
        .catch((e) => {
          console.log(e);
        });
    }

    getRandomNumbers(chainId, library?.getSigner())
      .then((randomNumbers) => {
        get14WinningNumber(
          account,
          randomNumbers.slice(0, 2),
          chainId,
          library?.getSigner()
        )
          .then((winNumbers) => {
            console.log("14 Winning = ", winNumbers.totalWinNumbers);
            setWinningNumbers(winNumbers.totalWinNumbers)
            setAccountWinningNumber(winNumbers.accountWinNumber)
          })
          .catch((e) => {
            console.log(e);
          });

        get4LuckyHolders(randomNumbers.slice(2), chainId, library?.getSigner())
          .then((holders) => {
            setLuckyHolders(holders);
          })
          .catch((e) => {
            console.log(e);
          });
      })
      .catch((e) => {
        console.log(e);
      });
  }, [account, chainId, library]);

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
          <div className="rankheader">
            <Rankheader
              rank={1}
              amount={Math.floor(dailyJackpotAmount * 15) / 100}
              address={topTicketMembers.length > 0 ? topTicketMembers[0] : "0x"}
            />
            <Rankheader
              rank={2}
              amount={Math.floor(dailyJackpotAmount * 10) / 100}
              address={topTicketMembers.length > 0 ? topTicketMembers[1] : "0x"}
            />
            <Rankheader
              rank={3}
              amount={Math.floor(dailyJackpotAmount * 3) / 100}
              address={topTicketMembers.length > 0 ? topTicketMembers[2] : "0x"}
            />
          </div>
          <div className="colheader">
            <Wincol
              items={winningNumbers}
              winningticket={accountWinNumber}
            />
          </div>
        </div>
        <Ticketholder
          heading={"Your Daily Volume Tickets"}
          tickets={dailyVolumeTickets}
        />
        <div className="luckyholderouter">
          <h3>Lucky Holders</h3>
          <div className="luckyholder">
            <div className="luckyholderbx ">
              <div>{luckyHolders.length > 0 ? luckyHolders[0] : 0}</div>
              <div className="coloredval">$25</div>
            </div>
            <div className="luckyholderbx ">
              <div>{luckyHolders.length > 1 ? luckyHolders[1] : 0}</div>
              <div className="coloredval">$25</div>
            </div>
            <div className="luckyholderbx ">
              <div>{luckyHolders.length > 2 ? luckyHolders[2] : 0}</div>
              <div className="coloredval">$25</div>
            </div>
            <div className="luckyholderbx ">
              <div>{luckyHolders.length > 3 ? luckyHolders[3] : 0}</div>
              <div className="coloredval">$25</div>
            </div>
          </div>
        </div>
        <Ticketholder
          heading={"Your Lambo Holder Tickets"}
          tickets={holderTickets}
        />

        <img src="images/lambo3.png" className="drawcar" alt="lambo" />
      </div>
    </section>
  );
};

export default Dailydraw;
