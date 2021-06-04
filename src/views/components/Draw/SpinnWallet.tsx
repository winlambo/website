
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers'
import React, { useEffect, useState } from 'react';
import TwoTicket from '../Menu/TwoTicket'
import { injectedConnector } from '../../../utils/connectors';
import { useEagerConnect } from '../../../hooks/useEagerConnect';
import { useInactiveListener } from '../../../hooks/useInactiveListener';
import { getContractObj, shorter, TOTAL_SUPPLY } from '../../../utils';
import { getDailyFund, getLamboFund, getLamboRandomNumber, getTicketInfo, getViolaPrice } from '../../../utils/contracts';
import Luckybx from './Luckybx'

const SpinnWallet: React.FC = () => {
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

    const [winningNumber, setWinningNumber] = useState('')
    useEffect(() => {
        getLamboRandomNumber(chainId, library?.getSigner()).then((result) => {
            setWinningNumber(result.toString())
        }).catch(e => {
            console.error(e)
            setWinningNumber('')
        })
    }, [chainId, library])

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
      <div className="spinwallet">
       
        <div className="wallet">
            <div className="wallet-inner">
                <button className={(active && account)? "btn-main btn-transparent" : "btn-main btn-black m-0"} onClick={!(active && account) ? connectAccount : () => {}} style={{backgroundColor:"transparent"}}>
                    { (active && account) ? <div><h5>Your Wallet</h5>{account}</div>: 'Connect'}
                </button>
                {/* <div>
                    <h5>Your Wallet</h5>
                    0xbc3e03e0c277227066fea34d7e95d31bc424dad7
                </div> */}
                <img src="images/mt.svg" alt="Meta" />
            </div>
        </div>
        <div className="luckybx">
            <Luckybx value={winningNumber.length > 8 ? winningNumber.slice(0,1) : '0'}/>
            <Luckybx value={winningNumber.length > 8 ? winningNumber.slice(1,2) : '0'}/>
            <Luckybx value={winningNumber.length > 8 ? winningNumber.slice(2,3) : '0'}/>
            <Luckybx value={winningNumber.length > 8 ? winningNumber.slice(3,4) : '0'}/>
            <Luckybx value={winningNumber.length > 8 ? winningNumber.slice(4,5) : '0'}/>
            <Luckybx value={winningNumber.length > 8 ? winningNumber.slice(5,6) : '0'}/>
            <Luckybx value={winningNumber.length > 8 ? winningNumber.slice(6,7) : '0'}/>
            <Luckybx value={winningNumber.length > 8 ? winningNumber.slice(7,8) : '0'}/>
            <Luckybx value={winningNumber.length > 8 ? winningNumber.slice(8,9) : '0'}/>
        </div>
        <div className="ticketouter">{ (active && account) ? <TwoTicket tickets={tickets} />:"" }</div>
    </div>
  );
}


export default SpinnWallet;
