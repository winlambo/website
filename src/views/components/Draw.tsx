import React, { useState, useRef ,createRef, useEffect} from 'react'
import { Web3Provider } from '@ethersproject/providers'
import Lose from './Popup/Loss'
import Winmodal from './Popup/Win'
import Countdown from "react-countdown";
import SpinnWallet from './Draw/SpinnWallet'
import { useWeb3React } from '@web3-react/core';
import { getLamboRandomNumber, getWinningNumber, isWinner } from '../../utils/contracts';
const Completionist = () => <span>CountDown completed!!!</span>;
const Draw: React.FC = () => {

    const context = useWeb3React<Web3Provider>()
    const {connector, library, chainId, account, activate, deactivate, active, error } = context

    const startTime = new Date()
    startTime.setUTCHours(16)
    startTime.setUTCMinutes(0)
    startTime.setUTCSeconds(0)
    startTime.setUTCMilliseconds(0)

    const endTime = new Date()
    startTime.setUTCHours(16)
    startTime.setUTCMinutes(10)
    startTime.setUTCSeconds(0)
    startTime.setUTCMilliseconds(0)


    const losRef = useRef(null)
    const winRef = useRef(null)
      function lossmodal(){
          // @ts-ignore
          losRef.current.openModal();
      }
      function winmodal(){
        // @ts-ignore
        winRef.current.openModal();
    }

    const [winningNumber, setWinningNumber] = useState('')
    useEffect(() => {
        const curTime = new Date()
        if (curTime < startTime || curTime > endTime) return
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
    }, [account, chainId, library])    

    return (
        <section className="bg-black lamb-draw">
            
            <Lose ref={losRef}/>
            <Winmodal ref={winRef}/>
            <div className="container">
                
                <div className="header">
                    <div className="lg1">
                        <img src="images/logow.png" alt="Logo" className="wlogo" />
                        <button className="btn-main btn-white" >Check on Chainlink</button>
                    </div>
                    <h1>THE LAMBO DRAW</h1>
                    <div className="date">
                        <h3>June 6, 2021</h3>
                        <Countdown date={Date.now() + 128*24*500000}>
                            <Completionist />
                        </Countdown>
                    </div>
                </div>
                <div className="info">
                    <SpinnWallet winningNumber={winningNumber}/>
                    <h6 className="mt-4">We would LOVE it if you tweet this win! Help us pump out the next Lambo! Click the button below to see a suggested tweet.</h6>
                    <button className="btn-main btn-white"  ><i className="fab fa-twitter"></i> TWITTER FOR LAMBO</button>
                    <div className="asterisk">
                        *DO NOT transfer/buy/sell any WINLAMBO tokens in the meantime. Your tokens are your tickets and moving them around could
                        alter your ticket range. We need to verify that your ticket matches the winning ticket.
                    </div>
                </div>
                <img src="images/lambo2.png" className="drawcar" alt="lambo" />
            </div>
        </section>
    );
}


export default Draw;
