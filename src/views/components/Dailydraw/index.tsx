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
import axios from "axios";
import { BigNumber } from "ethers";
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
  const [accountWinNumbers, setAccountWinningNumber] = useState<any>([]);
  const [topTicketMembers, setTopTicketMembers] = useState<any>([]);
  const [dailyVolumeTickets, setDailyVolumeTickets] = useState<any>([]);
  const [holderTickets, setHolderTickets] = useState<any>([]);
  const [dailyJackpotAmount, setDailyJackpotAmount] = useState(0);
  const [luckyHolders, setLuckyHolders] = useState<any>([]);
  const [accountLuckyHolders, setAccountLuckyHolders] = useState<any>([]);
  const [isWin, setIsWin] = useState(false)

  const startTime = new Date();
  startTime.setUTCHours(16);
  startTime.setUTCMinutes(0);
  startTime.setUTCSeconds(0);
  startTime.setUTCMilliseconds(0);
  
  // the end time is now
  const endTime = new Date();
  if (startTime >= endTime) {
      startTime.setDate(startTime.getDate() - 1);
  }

  const baseTimeOfStart = Date.parse(startTime.toString()) / 1000
  const endPointGetStartBlockNumber = 'https://api.bscscan.com/api?module=block&action=getblocknobytime&timestamp=' + baseTimeOfStart +'&closest=before&apiKey=25BTGGRTJN6KFU7M6DRE25FUKJENDQ98HI'

  useEffect(() => {

    // Get StartBlock of 16:00 UTC
    axios.get(endPointGetStartBlockNumber).then(response => { 
      if (response.status === 200 && response.data.status === '1') {
        var startBlockNumber = parseInt(response.data.result)
        const endpointBalance = 'https://api.bscscan.com/api?module=account&action=tokenbalancehistory&contractaddress=0xe9e7cea3dedca5984780bafc599bd69add087d56&address=0xb61ed72a55ff87a2b731e8d247555c1ee499a56a&blockno=' + startBlockNumber + '&apikey=25BTGGRTJN6KFU7M6DRE25FUKJENDQ98HI'

        axios.get(endpointBalance).then(response => {
          const busdAmountBigNum = BigNumber.from(response.data.result).mul(BigNumber.from(10).pow(2)).div(BigNumber.from(10).pow(18))
          const busdAmountNumber = busdAmountBigNum.toNumber() / 1e2
          setDailyJackpotAmount((busdAmountNumber * 5) / 100);
        })
      }
    })
  }, [endPointGetStartBlockNumber, account])

  useEffect(() => {
    getTop3PotTicketMembers(chainId, library?.getSigner())
      .then((members) => {
        setTopTicketMembers(members);
      })
      .catch((e) => {
        console.log(e);
        setTopTicketMembers([]);
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
            setWinningNumbers(winNumbers.totalWinNumbers)
            setAccountWinningNumber(winNumbers.accountWinNumbers)
            if (winNumbers.isWin) {
              setIsWin(true)
            } else {
              setIsWin(false)
            }
          })
          .catch((e) => {
            console.log(e);
          });

        get4LuckyHolders(account, randomNumbers.slice(2), chainId, library?.getSigner())
          .then((holders) => {
            setLuckyHolders(holders.luckyWinNumber);
            setAccountLuckyHolders(holders.accountLuckyHolders);
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
    <section className="daily-draw" id="daily-draw">
      <div className="container">
        <div className="header">
          <div className="lg1">
            <img src="images/car-engine.png" alt="Logo" className="wlogo" />
            <h1>THE "DAILY" DRAW</h1>
          </div>

          <div className="date">
            <div>{startTime.toUTCString()}</div>
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
              selfaddress={account ? account : "0x00"}
            />
            <Rankheader
              rank={2}
              amount={Math.floor(dailyJackpotAmount * 10) / 100}
              address={topTicketMembers.length > 0 ? topTicketMembers[1] : "0x"}
              selfaddress={account ? account : "0x00"}
            />
            <Rankheader
              rank={3}
              amount={Math.floor(dailyJackpotAmount * 5) / 100}
              address={topTicketMembers.length > 0 ? topTicketMembers[2] : "0x"}
              selfaddress={account ? account : "0x00"}
            />
          </div>
          <div className="colheader">
            <Wincol
              items={winningNumbers}
              winningticket={accountWinNumbers}
              winningAmount={Math.floor(dailyJackpotAmount * 5) / 100}
              isWin={isWin}
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
            <div className= { accountLuckyHolders?.includes(luckyHolders[0]) ? "luckyholderbx green" : "luckyholderbx" }>
              <div>{luckyHolders.length > 0 ? luckyHolders[0] : 0}</div>
              <div className="coloredval">$25</div>
            </div>
            <div className={ accountLuckyHolders?.includes(luckyHolders[1]) ? "luckyholderbx green" : "luckyholderbx" }>
              <div>{luckyHolders.length > 1 ? luckyHolders[1] : 0}</div>
              <div className="coloredval">$25</div>
            </div>
            <div className={ accountLuckyHolders?.includes(luckyHolders[2]) ? "luckyholderbx green" : "luckyholderbx" }>
              <div>{luckyHolders.length > 2 ? luckyHolders[2] : 0}</div>
              <div className="coloredval">$25</div>
            </div>
            <div className={ accountLuckyHolders?.includes(luckyHolders[3]) ? "luckyholderbx green" : "luckyholderbx" }>
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
