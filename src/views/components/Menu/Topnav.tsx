import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers'
import React, { useEffect, useState } from 'react';
import TwoTicket from './TwoTicket'
import { injectedConnector } from '../../../utils/connectors';
import { useEagerConnect } from '../../../hooks/useEagerConnect';
import { useInactiveListener } from '../../../hooks/useInactiveListener';
import { getContractObj, shorter } from '../../../utils';
import { getTicketInfo } from '../../../utils/contracts';

const Topnav: React.FC = () => {

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

    useEffect(() => {
        if (!!account && !!library) {
            const WinLamboContract = getContractObj('WinLambo', chainId, library.getSigner())
            if (WinLamboContract) {
                getTicketInfo(chainId, account, library).then((tickets) => {
                    setTickets(tickets)
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
        <nav className="container">
            <div className="nav-main">
                <img src="images/logo.svg" className="logo" />
                <div className="nav-left">
                    <TwoTicket tickets={tickets} />
                    <div className="afterlog">
                        <button className="btn-medium" onClick={!(active && account) ? connectAccount : () => {}}>
                        <img src="images/metamask.svg" className="meta" />
                            { (active && account) ? shorter(account) : 'Connect'}
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}


export default Topnav;
