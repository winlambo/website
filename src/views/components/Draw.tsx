import React, { useState, useRef , ElementRef, useEffect} from 'react'
import { Web3Provider } from '@ethersproject/providers'
import Lose from './Popup/Loss'
import Winmodal from './Popup/Win'
import Countdown from "react-countdown";
import SpinnWallet from './Draw/SpinnWallet'
import { useWeb3React } from '@web3-react/core';
import { getLamboRandomNumber, getTop3PotTicketMembers, getWinningNumber, isCurrentDay, isWinner } from '../../utils/contracts';
import PrepareJackpot from './Popup/PrepareJackpot';
import { InfoIcon } from './Styled';
import InfoModal from './Popup/InfoModal';

const Completionist = () => <span></span>;//<span>Refresh your page!</span>;
const Draw: React.FC = () => {

    const context = useWeb3React<Web3Provider>()
    const {connector, library, chainId, account, activate, deactivate, active, error } = context

    const losRef = useRef(null)
    const winRef = useRef(null)
    const prepareJackpotRef = useRef(null)

    
    type IRef = ElementRef<typeof InfoModal>;
    const infoModalRef = useRef<IRef>(null);

    // show info modal
    function infoModal() {
        infoModalRef.current?.openModal();
    }

    function lossmodal(){
          // @ts-ignore
          //losRef.current.openModal();
    }
    function winmodal(){
        // @ts-ignore
        winRef.current.openModal();
    }

    function prepareJackpotModal() {
        // @ts-ignore
        prepareJackpotRef.current.openModal();
    }

    function closeJackpotModal() {
        // @ts-ignore
        prepareJackpotRef.current.closeModal();
    }    

    const [winningNumber, setWinningNumber] = useState('')
    useEffect(() => {

        getLamboRandomNumber(chainId, library?.getSigner()).then((result) => {
            getWinningNumber(result, chainId, library?.getSigner()).then((winningNumber) => {
                setWinningNumber(winningNumber?.toString())
                isWinner(winningNumber,chainId, account, library?.getSigner()).then((isWon) => {
                    if (isWon) {
                        winmodal()
                    } else {
                        lossmodal()
                    }
                })
            }).catch(e => {
                console.error(e)
                setWinningNumber('')
            })
            
        }).catch(e => {
            console.error(e)
            setWinningNumber('')
        })
        if (account && chainId && library) {


            const hangTightTimer = setInterval(function(){
                const currentTime = new Date();
                const hangTightTime = new Date();
                hangTightTime.setUTCHours(15);
                hangTightTime.setUTCMinutes(59);
                hangTightTime.setUTCSeconds(0);
                hangTightTime.setUTCMilliseconds(0);
                if (currentTime >= hangTightTime) {
                    isCurrentDay(chainId, library?.getSigner()).then((flag) => {
                            if (!flag) {
                                prepareJackpotModal()
                            } else {
                                closeJackpotModal()
                                clearInterval(hangTightTimer)
                            }
                        }).catch(e => {
                            console.log(e)
                        })        
                    }
            }, 10000)
        }

    }, [account, chainId, library])    

    return (
        <section className="bg-black lamb-draw">
            
            <Lose ref={losRef}/>
            <Winmodal ref={winRef}/>
            <PrepareJackpot ref={prepareJackpotRef}/>
            <InfoModal ref={infoModalRef} content="lambo" />
            <div className="container">
                
                <div className="header">
                    <div className="lg1">
                        <img src="images/logow.png" alt="Logo" className="wlogo" />
                        <a className="btn-main btn-white" href="https://bscscan.com/address/0x7Bd9bC770685874a91DAe27D709742D5025D6348#readContract"  target="blank">Verify on BscScan!</a>
                    </div>
                    <h1>THE LAMBO DRAW <InfoIcon className="fas fa-info-circle" onClick={infoModal}></InfoIcon></h1>
                    <div className="date">
                        <h3>June 6, 2021</h3>
                        <Countdown date="">
                            <Completionist />
                        </Countdown>
                    </div>
                </div>
                <div className="info">
                    <SpinnWallet winningNumber={winningNumber}/>
                    <h6 className="mt-4">Help us find the Lambo winner! There is an ongoing Twitter contest for 1000 WINLAMBO tokens to 50 lucky winners! <br/>To enter, you must help us find the winner of the Lambo by sharing on Twitter! You can see a suggested tweet by clicking the button below!</h6>
                    <a className="btn-main btn-white"  href="http://twitter.com/intent/tweet?text=Who%27s%20the%20lucky%20winner!%3F%20%40winlambos%20is%20about%20to%20send%20out%20210%2C000%20BUSD%20to%20the%20winner%20of%20today%27s%20event!%20%0A%20%0ACheck%20https%3A%2F%2Fwinlambo.fund%2F%20to%20see%20if%20you%20won!%20%0ART%20this%20if%20you%20won!%20%23bsc%20%23winlambo%20%23binance%20%40cz_binance%20%20%0A%20%0AI%27m%20still%20eligible%20to%20win%20future%20events%20since%20I%20%23HODL%20%23WINLAMBO!" target="blank"><i className="fab fa-twitter"></i>TWEET TO WIN!</a>
                </div>
                <img src="images/lambo3.png" className="drawcar" alt="lambo" />
            </div>
        </section>
    );
}


export default Draw;
