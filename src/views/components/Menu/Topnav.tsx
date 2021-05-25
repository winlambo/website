import React from 'react';
import TwoTicket from './TwoTicket'

const Topnav: React.FC = () => {
    return (
        <nav className="container">
            <div className="nav-main">
                <img src="images/logo.png" className="logo" />
                <div className="nav-left">
                    <TwoTicket />
                    <div className="afterlog">
                        <img src="images/metamask.png" className="meta" />
                        0xa6b38...4074e
                    </div>
                </div>
            </div>
        </nav>
    );
}


export default Topnav;
