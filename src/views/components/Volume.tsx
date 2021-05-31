import React from 'react';
// import Mechanics from './components/Mechanics'
// import Top from './components/Top'
// import Volume from './components/Volume'

const Volume: React.FC = () => {
    return (
        <section className="bg-black">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Fair-Winner System</h1>
                        <div>
                            When it is time to send out a Lambo, we will use Chainlink's random number generator to generate the winning ticket! This is fair and verifiable, on-chain! <br /><br />
                            Winners will be announced on our Telegram! <br /><br />
                            Learn more about the Lambo drawing:
                            <div className="btn-outer">
                                <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x6a79e08db6c08b8f88703794bf1a47f5a01eb9dc" className="btn-main btn-white">Buy Now<i className="fas fa-mouse-pointer"></i></a>
                                <a href="https://winlambo.medium.com/" className="btn-main btn-white"><i className="fab fa-medium" />Learn More</a>
                                <a href="https://t.me/winlambo_official" className="btn-main btn-white"><i className="fas fa-paper-plane"></i>Telegram</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-md-0 mt-sm-3">
                        <h1>Incentivized Volume</h1>
                        <div>
                            <div>
                                We plan on pumping out Lambos by incentivizing volume with a Daily Jackpot! The Daily jackpot will be distributed to winners in 2 ways:
                            </div>
                            <ul className="my-3 ml-3">
                                <li>30% will go to the top 3 players in terms of volume for that day.</li>
                                <li>70% will go to 7 lucky players.</li>
                            </ul>

                            <div>
                                The more transactions performed, the more Lambos we can giveaway to $WINLAMBO token holders!
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Volume;
