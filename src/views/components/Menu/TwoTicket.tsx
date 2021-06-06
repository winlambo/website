import { BigNumber } from '@ethersproject/bignumber';
import React,{useState} from 'react';

interface TicketListProps {
  tickets: Array<Array<BigNumber>>
}

const Ticket: React.FC<TicketListProps> = ({tickets}) => {

  const TicketlistArr=[];
    let totaltickets = tickets.length;
    let amount = 0;
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
    for(let i=0; i<totaltickets;i++){
      TicketlistArr.push(<div className="ticketblkbx">{tickets[i][0].toNumber()} - {tickets[i][1].toNumber()}</div>);
      amount = amount + tickets[i][1].toNumber() - tickets[i][0].toNumber() + 1
    }
  return (

    <div className="ticket-bx">
      <div>{amount} tickets</div>
      <div className="ticket-bx-outer">
        <i className="fa fa-angle-left" aria-hidden="true" onClick={backward} style={{color: count == 0?"gray":""}}></i>
        <div className="ticketrotatorouter">
          <div className="ticketrotator" style={{width:60*totaltickets+'px',left:left+'px'}}>
          { TicketlistArr}
          </div>
        </div>
        <i className="fa fa-angle-right" aria-hidden="true" onClick={forward}style={{color: count == totaltickets?"gray":""}}></i>
      </div>
    </div>
  );
}


export default Ticket;
