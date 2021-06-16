import React, { useEffect, useState } from "react";
import { keyframes } from "styled-components";

export interface SpinbxProp {
    color?: string;
}

const Spinbox: React.FC<SpinbxProp> = ({ color }) => {
  return (
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
  );
};

export default Spinbox;
