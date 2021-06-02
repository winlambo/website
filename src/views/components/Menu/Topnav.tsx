import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers'
import React, { useEffect, useState } from 'react';
import TwoTicket from './TwoTicket'
import { injectedConnector } from '../../../utils/connectors';
import { useEagerConnect } from '../../../hooks/useEagerConnect';
import { useInactiveListener } from '../../../hooks/useInactiveListener';
import { getContractObj, shorter, TOTAL_SUPPLY } from '../../../utils';
import { getDailyFund, getLamboFund, getTicketInfo, getViolaPrice } from '../../../utils/contracts';



const Topnav: React.FC = () => {

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
    // bg audio ended

    
    const context = useWeb3React<Web3Provider>()
    const {connector, library, chainId, account, activate, deactivate, active, error } = context

    // connect injected Metamask
    const connectAccount = () => {
        activate(injectedConnector)
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
    useEffect(() => {
        getViolaPrice(chainId, library?.getSigner()).then((violaPrice) => {
            setNativeTokenPrice(violaPrice)
        }).catch(e => {
            setNativeTokenPrice(0)
        })
    }, [chainId, library])

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
                getTicketInfo(chainId, account, library).then((tickets) => {
                    setTickets(tickets)
                    let sum = 0
                    for (let idx = 0; idx < tickets.length; idx++) {
                        sum += tickets[idx][1].toNumber() - tickets[idx][0].toNumber() + 1
                    }
                    setTicketAmount(sum)
                }).catch(e => {
                    setTickets([])
                })
            }
        }
        return () => {
            setTickets([])
        }

    }, [account, chainId, library])

    
    return (
        <nav className="navcontainer">
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
                        <button className={(active && account)? "btn-main btn-transparent" : "btn-main btn-black m-0"} onClick={!(active && account) ? connectAccount : () => {}}>
                        <img src="images/mt.svg" className="meta" />
                            { (active && account) ? <div>{shorter(account)}<div style={{fontWeight:400}}>{(ticketAmount * 100 / TOTAL_SUPPLY).toFixed(2)}% win chance</div></div>: 'Connect'}
                        </button>
                    </div>
                </div>
                <i className={playing ?"volbtn fas fa-volume-mute":"volbtn fas fa-volume-up"} onClick={toggle}></i>   
            </div>
            <audio id="sound">
                <source src="/musicbg.mp3" type="audio/mpeg" />
                <p>Your browser doesn't support HTML5 audio. Here is
                    a <a href="myAudio.mp3">link to the audio</a> instead.</p>
            </audio>
        </nav>
    );
}


export default Topnav;
