import React, { useEffect, useState } from 'react';
import { keyframes } from "styled-components";
import Spinbox from './Spinbox'
export interface WincolProps {
    items?:number[],
    winningticket?:number
    winningAmount?:number
}


const Wincol: React.FC<WincolProps> = ({items,winningticket,winningAmount}) => {
    console.log('items = ', items)
    console.log('winningTicket = ', winningticket)
    const displayWinAmount = winningAmount ? winningAmount.toString() : "0"
    return (
        <div className="wincol">
            <div className="row">
                {items?.map((item, index) => {
                   setTimeout(function(){
               }, index*2000);
                   return  <Spinbox key={index} winningticket={index + 1} goldenamount={"$" + displayWinAmount} color={item === winningticket ? "green" : ""} spinNumbers={item.toString()}/> 
                })}
            </div>
        </div>
    );
}

export default Wincol;
            