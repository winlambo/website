import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers'
import { BigNumber } from "ethers";
import React, { useEffect, useRef, useState } from 'react';
import TwoTicket from './TwoTicket'

import { useEagerConnect } from '../../../hooks/useEagerConnect';
import { useInactiveListener } from '../../../hooks/useInactiveListener';
import { BURN_ADDRESS, getContractObj, LP_ADDRESS, shorter, TOTAL_SUPPLY, UL_ADDRESS, ZERO_ADDRESS } from '../../../utils';
import { getDailyFund, getLamboFund, getTicketInfo, getViolaPrice, getLamboRandomNumber, isCurrentDay, getAccountBalance } from '../../../utils/contracts';

import Wallets from '../Popup/Wallets';
import Account from '../Popup/Account';


const Topnav: React.FC = () => {
    const context = useWeb3React<Web3Provider>()
    const {connector, library, chainId, account, activate, deactivate, active, error } = context
    const walletRef = useRef(null);
    const accountRef = useRef(null);

    // show the list of wallets to connect
    function walletModal(){
        // @ts-ignore
        walletRef.current.openModal();
    }

    // show the account address and win chance, and logout button
    function accountInfoModal() {
        // @ts-ignore
        accountRef.current.openModal();
    }

    // handle logic to recognize the connector currently being activated
    const [activatingConnector, setActivatingConnector] = React.useState()
        useEffect(() => {
            if (activatingConnector && activatingConnector === connector) {
                setActivatingConnector(undefined)
            }
    }, [activatingConnector, connector])

    // mount only once or face issues :P
    const [triedEager] = useEagerConnect()
    useInactiveListener(!triedEager || !!activatingConnector)
    
    const [balance, setBalance] = useState(null)
    const [tickets, setTickets] = useState([])
    const [nativeTokenPrice, setNativeTokenPrice] = useState(0);
    const [lamboFundAmount, setLamboFundAmount] = useState(0);
    const [dailyFundAmount, setDailyFundAmount] = useState(0);
    const [ticketAmount, setTicketAmount] = useState(0);
    const [winningNumber, setWinningNumber] = useState('');
    const [winningChance, setWinningChance] = useState(0);

    useEffect(() => {
        getViolaPrice(chainId, library?.getSigner()).then((violaPrice) => {
            setNativeTokenPrice(violaPrice)
        }).catch(e => {
            setNativeTokenPrice(0)
        })


    }, [chainId, library])

    useEffect(() => {
        if (account && walletRef.current) {
             // @ts-ignore
            walletRef.current.closeModal();
        }
    }, [account]);

    useEffect(() => {
        getLamboFund(chainId, library?.getSigner()).then((busdAmount) => {
            setLamboFundAmount(busdAmount)
        }).catch(e => {
            setLamboFundAmount(0)
        })
    }, [chainId, library])

    useEffect(() => {
        getDailyFund(chainId, library?.getSigner()).then((busdAmount) => {
            setDailyFundAmount(busdAmount)
        }).catch(e => {
            setDailyFundAmount(0)
        })
    }, [chainId, library])    

    useEffect(() => {
        if (!!account && !!library) {
            const WinLamboContract = getContractObj('WinLambo', chainId, library.getSigner())
            if (WinLamboContract) {
                getTicketInfo(chainId, account, library).then(async (tickets) => {
                    setTickets(tickets)
                    let sum = 0
                    for (let idx = 0; idx < tickets.length; idx++) {
                        sum += tickets[idx][1].toNumber() - tickets[idx][0].toNumber() + 1
                    }
                    setTicketAmount(sum)
                    
                    // caculate Liquid provider balance
                    let lpbalance = await getAccountBalance(chainId, LP_ADDRESS, library);
                    lpbalance = lpbalance.mul(BigNumber.from(10).pow(8)).div(BigNumber.from(10).pow(18));
                    const lpbal = lpbalance.toNumber() / 1e8

                    // get unicrypt locker balance
                    let ulbalance = await getAccountBalance(chainId, UL_ADDRESS, library);
                    ulbalance = ulbalance.mul(BigNumber.from(10).pow(8)).div(BigNumber.from(10).pow(18));
                    const ulbal = ulbalance.toNumber() / 1e8

                    // get burend balance
                    let burnbalance = await getAccountBalance(chainId, BURN_ADDRESS, library);
                    burnbalance = burnbalance.mul(BigNumber.from(10).pow(8)).div(BigNumber.from(10).pow(18));
                    const burnbal = burnbalance.toNumber() / 1e8;

                    // get the tickets hold by zero address
                    let zerotickets = await getTicketInfo(chainId, ZERO_ADDRESS, library);
                    let zero_sum = 0;
                    for (let idx = 0; idx < zerotickets.length; idx++) {
                        zero_sum += zerotickets[idx][1].toNumber() - zerotickets[idx][0].toNumber() + 1
                    }
                    const winning_chance = sum * 100 / (TOTAL_SUPPLY - lpbal - ulbal - burnbal - zero_sum);
                    setWinningChance(winning_chance);
                }).catch(e => {
                    console.log(e)
                    setTickets([])
                })
            }
        } 
        return () => {
            setTickets([])
        }

    }, [account, chainId, library])

    // for bg audio start
    const [audio] = useState(new Audio('/musicbg.mp3'));
    const [playing, setPlaying] = useState(true);

    const toggle = () => setPlaying(!playing);
  
    useEffect(() => {
        playing ? audio.play() : audio.pause();
      },
      [playing]
    );
  
    useEffect(() => {
      audio.addEventListener('ended', () => setPlaying(false));
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
      };
    }, []);

    
    return (
        <nav className="navcontainer">
            <Wallets ref={walletRef} />
            <Account ref={accountRef} />
            <div className="nav-main">
                {/* <img src="images/logo.png" className="logo" /> */} 
                <div className="nav-right">                 
                        <div className="valouter">
                            <div>
                                WINLAMBO
                            </div>
                            <div><span style={{"color":"#1aa351"}}>$</span>{nativeTokenPrice}</div>
                        </div>
                        <div className="valouter">
                            <div>
                                LAMBOFUND
                            </div>
                            <div><span style={{"color":"#1aa351"}}>$</span>{lamboFundAmount}</div>
                        </div>
                        <div className="valouter">
                            <div>
                                DAILYFUND
                            </div>
                            <div><span style={{"color":"#1aa351"}}>$</span>{dailyFundAmount}</div>
                        </div>

                </div>
                <div className="logo">
                    <img src="images/logon.svg" alt="sports" />
                </div>
                <div className="nav-left">
                    { (active && account) ? <TwoTicket tickets={tickets} />:"" }
                    
                    <div className="afterlog">
                        <button className={(active && account)? "btn-main btn-transparent" : "btn-main btn-black m-0"} onClick={!(active && account) ? walletModal : accountInfoModal}>
                            {/* <img src="images/mt.svg" className="meta" /> */}
                            { (active && account) ? <div className="account-info">{shorter(account)}<div className="chance">{winningChance.toFixed(8)}%</div></div>: 'Connect wallet'}
                        </button>
                        {(active && account)?
                            <div className="arrowanimated">
                                <img src="images/up-arrow.png" alt="arrow" />
                                <div className="text">
                                THAT’S YOUR <br /> CHANCE AT <br /> WINNING
                                </div>
                            </div> : ""
                        }
                    </div>
                </div>
                <i className={playing ?"volbtn fas fa-volume-mute":"volbtn fas fa-volume-up"} onClick={toggle}></i>   
            </div>
        </nav>
    );
}


export default Topnav;
