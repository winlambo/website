import React from 'react';
import TwoTicket from './TwoTicket'

const Topnav: React.FC = () => {
  return (
    <nav className="container footer-nav">
      <div className="nav-main">
          <div className="logo">
              winlambo
          </div>
        <div className="nav-left">
          {/* <TwoTicket /> */}
        </div>
      </div>
    </nav>
  );
}


export default Topnav;
