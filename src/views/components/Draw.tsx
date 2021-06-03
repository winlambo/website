import React, { useState, useRef ,createRef} from 'react'
import Lose from './Popup/Loss'
import Winmodal from './Popup/Win'
const Draw: React.FC = () => {

    const losRef = useRef(null);
    const winRef = useRef(null);
      function lossmodal(){
          // @ts-ignore
          losRef.current.openModal();
      }
      function winmodal(){
        // @ts-ignore
        winRef.current.openModal();
    }
    return (
        <section className="bg-black lamb-draw">
            
            <Lose ref={losRef}/>
            <Winmodal ref={winRef}/>
            <div className="container">
                <div className="header">
                    <div className="lg1">
                        <img src="images/logow.png" alt="Logo" className="wlogo" />
                        <button className="btn-main btn-white" onClick={winmodal}>Check on Chainlink</button>
                    </div>
                    <h1>THE LAMBO DRAW</h1>
                    <div className="date">
                        <h3>June 6, 2021</h3>
                        127:43:21:10
                    </div>
                </div>
                <div className="wallet">
                    <div className="wallet-inner">
                        <div>
                            <h5>Your Wallet</h5>
                            0xbc3e03e0c277227066fea34d7e95d31bc424dad7
                        </div>
                        <img src="images/mt.svg" alt="Meta" />
                    </div>
                </div>
                <div className="info">
                    <div className="luckybx">
                        <div className="lckybxinnr">1</div>
                        <div className="lckybxinnr">1</div>
                        <div className="lckybxinnr">1</div>
                        <div className="lckybxinnr">1</div>
                        <div className="lckybxinnr">1</div>
                        <div className="lckybxinnr">1</div>
                        <div className="lckybxinnr">1</div>
                    </div>
                    <div>
      
                    </div>
         
                    <h6>We would LOVE it if you tweet this win! Help us pump out the next Lambo! Click the button below to see a suggested tweet.</h6>
                    <button className="btn-main btn-white"  onClick={lossmodal}><i className="fab fa-twitter"></i> TWITTER FOR LAMBO</button>
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
