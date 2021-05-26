import React from 'react';
import TwoTicket from './TwoTicket'

const Topnav: React.FC = () => {
  return (
    <nav className="container footer-nav">
      <div className="nav-main">
        <img src="images/footerlogo.png" className="logo" />
        <div className="nav-left">
          {/* <TwoTicket /> */}
        </div>
      </div>
    </nav>
  );
}


export default Topnav;
