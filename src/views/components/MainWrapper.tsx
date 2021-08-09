import React from 'react';
import Exchange from './Exchange'
import Topnav from './Menu/Topnav'
import Rewards from './Popup/Rewards';
import { useRef } from 'react';

const { REACT_APP_Telebtn, REACT_APP_MY_ENV } = process.env;
const Mainwrapper: React.FC = () => {
    const rewardsRef = useRef(null)
    // open rewards modal
    function rewardsModal() {
        // @ts-ignore
        rewardsRef.current.openModal();
    }
    return (
        <section className="bg-white main-wraper">
            <Topnav />
            <Rewards ref={rewardsRef} />
            <div className="maincol2">
                {/* <img src="images/lambo.png" alt="" /> */}
                <div className="carousel slide" data-ride="carousel" data-interval="2400">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="images/lambo.png" alt="" />
                        </div>
                        <div className="carousel-item">
                        <img src="images/lambo2.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div>
                            <div>
                                Wen Lambo? Wen Moon?
                            </div>
                            <h1>Lambo Generation Hold and Win <div className="arrow"></div> </h1>
                            <div className="info">
                            A lucky holder won $210,000 BUSD in June! <a href="https://bsctimes.com/winlambo-gives-away-its-first-lambo/" target="_blank">Read more.</a> <br /><br />

                            Your tokens are your tickets. The more tokens you have, the more tickets you have, and the higher the chance of winning!<br /><br />

                            Contract Address: <span className="info-contract-address">0x6a79e08db6c08b8f88703794bf1a47f5a01eb9dc</span><br /><br /> 
                            To learn more about the technicalities, read our Docs below.
                            

                                <div className="btn-outer">
                                    <div>
                                    <a className="btn-main btn-black" target="_blank" onClick={rewardsModal}>Claim Rewards</a>
                                    <a href="https://pancakeswap.finance/swap?outputCurrency=0x6a79e08db6c08b8f88703794bf1a47f5a01eb9dc" className="btn-main btn-black" target="_blank">Buy Now</a>
                                    </div>
                                    <div>
                                    <a href="http://docs.winlambo.fund" className="btn-main btn-black" target="_blank">Docs</a>
                                    <a href="https://winlambo.medium.com/" className="btn-main btn-black btn-auto" target="_blank"><i className="fab fa-medium-m"></i></a>
                                    <a href="https://t.me/winlambo_official" className="btn-main btn-black btn-auto" target="_blank"><i className="fas fa-paper-plane"></i></a>
                                    <a href="https://bscscan.com/token/0x6a79e08db6c08b8f88703794bf1a47f5a01eb9dc" className="btn-main btn-black btn-auto" target="_blank"><img src="images/bscscn.svg" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-md-6">
                        <Exchange />
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Mainwrapper;
