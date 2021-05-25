import React from 'react';
import Exchange from './Exchange'
import Topnav from './Menu/Topnav'
const Mainwrapper: React.FC = () => {
    return (
        <section className="bg-white main-wraper">
            <Topnav />

            <div className="maincol2"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div>
                            <div>
                                Wen Lambo? Wen Moon?
                            </div>
                            <h1>Lambo Generation Hold and Win</h1>
                            <div>
                                Welcome to  <span className="blk-bx">winlambo!</span>. Our plan is to send out lambos to the community like the Chad Oprah Winfrey!
                            <div className="btn-outer">
                                    <a href="" className="btn-main btn-black">Medium</a>
                                    <a href="" className="btn-main btn-black">Telegram</a>
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
