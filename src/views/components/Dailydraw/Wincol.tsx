import React, { useEffect, useState } from "react";
import { keyframes } from "styled-components";
import Spinbox from "./Spinbox";
export interface WincolProps {
  items?: number[];
  winningticket?: number[];
  winningAmount?: number;
}

const Wincol: React.FC<WincolProps> = ({
  items,
  winningticket,
  winningAmount,
}) => {
  const [opacity, setopacity] = useState(0);

  const displayWinAmount = winningAmount ? winningAmount.toString() : "0";
  const [isWin, setIsWin] = useState(false)

  items?.map((item, index) => {
    if (winningticket?.includes(item)) {
      setIsWin(true)
    }
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      // @ts-ignore
      setopacity(1);
      // random timrout for airdrop info
    }, 17 * 900);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="wincol">
      <div className="row">
        {items?.map((item, index) => {
          setTimeout(function () {}, index * 2000);
          return (
            <Spinbox
              key={index}
              winningticket={index + 1}
              goldenamount={"$" + displayWinAmount}
              color={winningticket?.includes(item) ? "green" : ""}
              spinNumbers={item.toString()}
            />
          );
        })}

        {!isWin ? (
            <div className="col-md-4" style={{ opacity: opacity }}>
            <div className="coloredinfo">
              <div className="coloredval">
                Congrats! You will be airdropped your winnings!
                <div className="coloredbg">
                  Congrats! You will be airdropped your winnings!
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Wincol;
