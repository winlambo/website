import React, { useEffect, useState } from "react";
import { keyframes } from "styled-components";

export interface SpinbxProp {
  color?: string;
  winningticket?: number;
}

const Spinbox: React.FC<SpinbxProp> = ({ color, winningticket }) => {
  return (
    <div className=" col-md-4" >
      <div className="winningname" style={{ opacity: winningticket ? 1 : 0 }}>
        Winning Ticket #{winningticket}
      </div>
      <div className={`spinouter ${color}`}>
        <div className="spin">0</div>
        <div className="spin">0</div>
        <div className="spin">0</div>
        <div className="spin">0</div>
        <div className="spin">0</div>
        <div className="spin">0</div>
        <div className="spin">0</div>
        <div className="spin">0</div>
        <div className="spin">0</div>
      </div>
    </div>
  );
};

export default Spinbox;
