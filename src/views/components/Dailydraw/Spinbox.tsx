import React, { useEffect, useState } from "react";
import { keyframes } from "styled-components";
import Spinrotate from "./Spinrotate";

export interface SpinbxProp {
  color?: string;
  winningticket?: number;
  goldenamount?: string;
  spinNumbers: string;
}

const Spinbox: React.FC<SpinbxProp> = ({
  color,
  winningticket,
  spinNumbers,
  goldenamount,
}) => {
  const [spinNumberhook, setspinNumberhook] = useState("");
  const [opacity, setopacity] = useState(0);
  const [wincolor, setwincolor] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setspinNumberhook(spinNumbers);
      setopacity(1);
      setwincolor(wincolor)
      // @ts-ignore
    }, winningticket * 900);
    return () => clearTimeout(timer);
  }, []);
  return (
    // @ts-ignore
    <div className=" col-md-4" style={{ opacity: opacity }}>
      <div className="winningname">
        Winning Ticket #{winningticket}
        <div className="coloredval">
          {goldenamount}
          <div className="coloredbg">{goldenamount}</div>
        </div>
      </div>
      <div className={`spinouter luckybx ${wincolor}`}>
        <Spinrotate
          value={spinNumberhook.length > 8 ? spinNumberhook?.slice(0, 1) : "L"}
        />
        <Spinrotate
          value={spinNumberhook.length > 8 ? spinNumberhook.slice(1, 2) : "O"}
        />
        <Spinrotate
          value={spinNumberhook.length > 8 ? spinNumberhook.slice(2, 3) : "A"}
        />
        <Spinrotate
          value={spinNumberhook.length > 8 ? spinNumberhook.slice(3, 4) : "D"}
        />
        <Spinrotate
          value={spinNumberhook.length > 8 ? spinNumberhook.slice(4, 5) : "I"}
        />
        <Spinrotate
          value={spinNumberhook.length > 8 ? spinNumberhook.slice(5, 6) : "N"}
        />
        <Spinrotate
          value={spinNumberhook.length > 8 ? spinNumberhook.slice(6, 7) : "G"}
        />
        <Spinrotate
          value={spinNumberhook.length > 8 ? spinNumberhook.slice(7, 8) : "-"}
        />
        <Spinrotate
          value={spinNumberhook.length > 8 ? spinNumberhook.slice(8, 9) : "-"}
        />
      </div>
    </div>
  );
};

export default Spinbox;
