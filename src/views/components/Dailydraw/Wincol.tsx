import React, { useEffect, useState } from 'react';
import { keyframes } from "styled-components";
import Spinbox from './Spinbox'
export interface WincolProps {
    items?:number[],
    winningticket?:number
}


const Wincol: React.FC<WincolProps> = ({items,winningticket}) => {
    return (
        <div className="wincol">
            <div className="row">
                {items?.map((item, index) => (
                    <Spinbox key={index} winningticket={index + 1} color={index + 1 === winningticket ? "green" : ""} spinNumbers={item.toString()}/>    
                ))}
            </div>
        </div>
    );
}

export default Wincol;
            