import React, { useEffect, useState } from 'react';
import { keyframes } from "styled-components";
import Spinbox from './Spinbox'
export interface WincolProps {
    rank?: number
    amount?: number
    winningticket?:number
}


const Wincol: React.FC<WincolProps> = ({rank,amount,winningticket}) => {
    let rankcolor;
    if(rank == 1)
        rankcolor ="#e4d272"
    else if(rank == 2)
        rankcolor ="#ffa00c"
    else if(rank == 3)
        rankcolor ="#ff0c5c"
    return (
        <div className="wincol">
            <div className="header">
                <div className="coloredval">{amount}$
                    <div className="coloredbg">
                    {amount}$
                    </div>
                </div>
                <div className="headerinr">
                    <div className="rank" style={{background:rankcolor}}>{rank}</div>
                    0xa6b38ad3155533yxe4074e
                </div>
                <div className="winningname" style={{opacity:winningticket?1:0}}>Winning Ticket #{winningticket}</div>
                <Spinbox color={"green"}/>
                <Spinbox/>
                <Spinbox/>
                <Spinbox/>
                <Spinbox/>
            </div>
        </div>
    );
}

export default Wincol;
            