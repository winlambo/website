import React from 'react';
import Exchange from './Exchange'
import Topnav from './Menu/Topnav'
const { REACT_APP_Telebtn, REACT_APP_MY_ENV } = process.env;
const Mainwrapper: React.FC = () => {
    return (
        <section className="bg-white main-wraper">
            <Topnav />

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
                            <div>
                                Welcome to  <span className="blk-bx">winlambo!</span>. Our plan is to send out lambos to the community like the Chad Oprah Winfrey!
                                <div className="btn-outer">
                                    <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x6a79e08db6c08b8f88703794bf1a47f5a01eb9dc" className="btn-main btn-black">Buy Now</a>
                                    <a href="https://winlambo.medium.com/" className="btn-main btn-black btn-auto"><i className="fab fa-medium-m"></i></a>
                                    <a href="https://t.me/winlambo_official" className="btn-main btn-black btn-auto"><i className="fas fa-paper-plane"></i></a>
                                    <a href="https://t.me/winlambo_official" className="btn-main btn-black btn-auto"><img src="images/bscscn.svg" /></a>
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
