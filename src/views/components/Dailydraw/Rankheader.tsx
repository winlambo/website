import React, { useEffect, useState } from 'react';
import { keyframes } from "styled-components";
import Spinbox from './Spinbox'
export interface WincolProps {
    rank?: number
    amount?: number
    winningticket?:number
    address?:string
}


const Rankheader: React.FC<WincolProps> = ({rank,amount,winningticket, address}) => {
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
                    {address}
                </div>
            </div>
        </div>
    );
}

export default Rankheader;
            