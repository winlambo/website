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
            <div className="row">
                <Spinbox color={"green"}  winningticket={1}/>
                <Spinbox  winningticket={1}/>
                <Spinbox  winningticket={1}/>
                <Spinbox winningticket={1}/>
                <Spinbox winningticket={1}/>
                <Spinbox  winningticket={1}/>
                <Spinbox  winningticket={1}/>
                <Spinbox winningticket={1}/>
                <Spinbox winningticket={1}/>
                <Spinbox winningticket={1}/>
                <Spinbox  winningticket={1}/>
                <Spinbox  winningticket={1}/>
                <Spinbox winningticket={1}/>
                <Spinbox winningticket={1}/>
            </div>
        </div>
    );
}

export default Wincol;
            