import React,{useState} from 'react';


const Ticket: React.FC = () => {
  const Ticketlist = ["2.556 - 2.549","3.556 - 4.549"]
    let totaltickets = 2;
    const [count, setCount] = useState(0);
    // let count = 0;
    function forward(){
      if(count<totaltickets-1)
        setCount(count+1);
      
    }
    function backward(){
      if(count>0)
        setCount(count-1);
    }
  return (
    <div className="ticket-bx">
      <div>{totaltickets} tickets</div>
      <div className="ticket-bx-outer">
        <i className="fa fa-angle-left" aria-hidden="true" onClick={backward} style={{color: count == 0?"gray":"black"}}></i>
          <div className="ticketbx">{Ticketlist[count]}</div>
        <i className="fa fa-angle-right" aria-hidden="true" onClick={forward}style={{color: count == totaltickets-1?"gray":"black"}}></i>
      </div>
    </div>
  );
}


export default Ticket;
