import React from 'react';
// import Mechanics from './components/Mechanics'
// import Top from './components/Top'
// import Volume from './components/Volume'

const Volume: React.FC = () => {
    return (
        <section className="bg-black chad-bg">
            <div className="container">
                <div className="chadheading">
                    <div className="chadheadingoter">
                        <div className="chadchadbg chadupper">chad <span>chad</span></div>
                        Why become a chad?
                        <div className="chadchadbg chadbottom">chad <span>chad</span></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 chadcols chadcol1">
                        <h1>Fair-Winner System</h1>
                        <div>
                        When it is time to send out a Lambo, 
                        we will use Chainlink's random numbe
                        r generator to generate the winning ticket! This is fair and verifiable, on-chain! <br /><br />
                        Winners will be announced on our Telegram!
                        Learn more about the Lambo drawing:
                        </div>
                    </div>
                    <div className="col-md-4 mt-md-0 mt-sm-3 chadcols chadcol2">
                        <h1>Incentivized Volume</h1>
                        <div>
                            <div>
                             We plan on pumping out Lambos by incentivizing volume with a Daily Jackpot! The Daily jackpot will be distributed to winners in 2 ways:
                            </div>
                            <ul className="my-3 ml-3">
                                <li>70% will to the top 3 aily volume users </li>
                                <li>30% will go to 6 lucky users.</li>
                            </ul>

                            <div>
                            The more transactions performed, the more Lambos we can giveaway to $WINLAMBO token holders!
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mt-md-0 mt-sm-3 chadcols chadcol3">
                        <h1>Community Driven</h1>
                        <div>
                            <div>
                                We are a fully community driven and orientated project. We are build for chads by chads.
                            </div>
                            <br />
                            <div>
                                Our marketing and different positons are filled by community members and highly dedicated individuals to ensure maximum project growht and success.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Volume;
