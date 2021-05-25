import React from 'react';


const Ticket: React.FC = () => {
  return (
    <div className="ticket-bx">
      <div>2 tickets</div>
      <div className="ticket-bx-outer">
        <i className="fa fa-angle-left" aria-hidden="true"></i>
        <div className="ticketbx">2.556 - 2.549</div>
        <div className="ticketbx">2.556 - 2.549</div>
        <i className="fa fa-angle-right" aria-hidden="true"></i>
      </div>
    </div>
  );
}


export default Ticket;
