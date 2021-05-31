import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers'
import React, { useEffect, useState } from 'react';
import TwoTicket from './TwoTicket'
import { injectedConnector } from '../../../utils/connectors';
import { useEagerConnect } from '../../../hooks/useEagerConnect';
import { useInactiveListener } from '../../../hooks/useInactiveListener';
import { getContractObj, shorter } from '../../../utils';
import { getTicketInfo } from '../../../utils/contracts';


// const useAudio = () => {
    
  
//     return [playing, toggle];
//   };


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
                 
                {/* <img src="images/logo.png" className="logo" /> */}
                <div className="nav-right">
                 
                        <div className="valouter">
                            <div>
                                <span style={{"color":"#1aa351"}}>$</span>
                                WINLAMBO:
                            </div>
                            0,0015123$
                        </div>
                        <div className="valouter">
                            <div>
                                <span style={{"color":"#1aa351"}}>$</span>
                                LAMBOFUND:
                            </div>
                            0,0015123$
                        </div>
                        <div className="valouter">
                            <div>
                                <span style={{"color":"#1aa351"}}>$</span>
                                DAILYFUND:
                            </div>
                            0,0015123$
                        </div>

                </div>
                <div className="logo">
                    <img src="images/logon.png" alt="sports" />
                </div>
                <div className="nav-left">
                    { (active && account) ? <TwoTicket tickets={tickets} />:"" }
                    
                    <div className="afterlog">
                        <button className={(active && account)? "btn-main btn-transparent" : "btn-main btn-black m-0"} onClick={!(active && account) ? connectAccount : () => {}}>
                        <img src="images/mt.svg" className="meta" />
                            { (active && account) ? <div>{shorter(account)}<div style={{fontWeight:400}}>12% win chance</div></div>: 'Connect'}
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
