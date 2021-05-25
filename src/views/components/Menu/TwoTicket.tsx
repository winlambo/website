import React,{useState} from 'react';


const Ticket: React.FC = () => {
  const Ticketlist = ["1.556 - 2.549","2.556 - 4.549","3.556 - 2.549","4.556 - 4.549"];
  const TicketlistArr=[];
    let totaltickets = 4;
    const [count, setCount] = useState(0);
    const [left, setLeft] = useState(0);
    // let count = 0;
    function forward(){
      if(count<totaltickets-1){
        setCount(count+2);
        setLeft(left-120);
      }
      
    }
    function backward(){
      if(count>0){
        setCount(count-2);
        setLeft(left+120);
      }
    }
    for(let i =0; i<totaltickets;i++){
      TicketlistArr.push(<div className="ticketblkbx">{Ticketlist[i]}</div>);
    }
  return (
    <div className="ticket-bx">
      <div>{totaltickets} tickets</div>
      <div className="ticket-bx-outer">
        <i className="fa fa-angle-left" aria-hidden="true" onClick={backward} style={{color: count == 0?"gray":"black"}}></i>
        <div className="ticketrotatorouter">
          <div className="ticketrotator" style={{width:120*totaltickets+'px',left:left+'px'}}>
          { TicketlistArr}
          </div>
          
        </div>
          
        <i className="fa fa-angle-right" aria-hidden="true" onClick={forward}style={{color: count == totaltickets?"gray":"black"}}></i>
      </div>
    </div>
  );
}


export default Ticket;
