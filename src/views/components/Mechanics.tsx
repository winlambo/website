import React from 'react';

const Mechanics: React.FC = () => {
    return (
        <section className="bg-black">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Buy | Hold | Win</h1>
                        <div>
                            A winner is chosen once the Lambo multisig reaches a balance of $210,000- enough to buy a sexy 2021 Huracan EVO! <br /><br />
                            Your tickets are your tokens. The more tokens you have, the more tickets you have, and the higher the chance of winning! <br />
                            To learn more about the technicalities, read our Medium article below.
                            <div className="btn-outer">
                                <a href="" className="btn-main btn-white">Buy Now<i className="fas fa-mouse-pointer"></i></a>
                                <a href="" className="btn-main btn-white">Medium</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-md-0 mt-sm-3">
                        <h1>Mechanics</h1>
                        <div>
                            <div className="mb-3">1 Billion total tokens:</div>
                            <ul className="ml-3">
                                <li>500M will go to Liquidity.</li>
                                <li>350M will go to Presale.</li>
                                <li>150M will be burned as marketing milestones are reached!</li>
                            </ul>

                            <div className="my-3">Each transaction reflects:</div>
                            <ul className="ml-3">
                                <li>4% to Lambo Fund.</li>
                                <li>4% to Daily Jackpot.</li>
                                <li>2% to WINLAMBO Hodlers.</li>
                                <li>2% to Liquidity Pool.</li>
                                <li>1% to Team.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Mechanics;
