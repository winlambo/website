import React, { useEffect, useState } from "react";
import { keyframes } from "styled-components";

export interface SpinbxProp {
  color?: string;
  winningticket?: number;
  spinNumbers:string;
}

const Spinbox: React.FC<SpinbxProp> = ({ color, winningticket, spinNumbers }) => {
  return (
    <div className=" col-md-4" >
      <div className="winningname" style={{ opacity: winningticket ? 1 : 0 }}>
        Winning Ticket #{winningticket}
      </div>
      <div className={`spinouter ${color}`}>
        <div className="spin">{spinNumbers?.length > 0 ? spinNumbers[0] : '0'}</div>
        <div className="spin">{spinNumbers?.length > 1 ? spinNumbers[1] : '0'}</div>
        <div className="spin">{spinNumbers?.length > 2 ? spinNumbers[2] : '0'}</div>
        <div className="spin">{spinNumbers?.length > 3 ? spinNumbers[3] : '0'}</div>
        <div className="spin">{spinNumbers?.length > 4 ? spinNumbers[4] : '0'}</div>
        <div className="spin">{spinNumbers?.length > 5 ? spinNumbers[5] : '0'}</div>
        <div className="spin">{spinNumbers?.length > 6 ? spinNumbers[6] : '0'}</div>
        <div className="spin">{spinNumbers?.length > 7 ? spinNumbers[7] : '0'}</div>
        <div className="spin">{spinNumbers?.length > 8 ? spinNumbers[8] : '0'}</div>
      </div>
    </div>
  );
};

export default Spinbox;
