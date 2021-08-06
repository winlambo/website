import React, { useEffect, useState, useRef } from "react";
import { keyframes } from "styled-components";
import Spinbox from "./Spinbox";
import Rewards from '../Popup/Rewards';

export interface WincolProps {
  items?: number[];
  winningticket?: number[];
  winningAmount?: number;
  isWin: boolean;
}

const Wincol: React.FC<WincolProps> = ({
  items,
  winningticket,
  winningAmount,
  isWin
}) => {
  const [opacity, setopacity] = useState(0);

  const rewardsRef = useRef(null)
  // open rewards modal
  function rewardsModal() {
      // @ts-ignore
      rewardsRef.current.openModal();
  }

  const displayWinAmount = winningAmount ? winningAmount.toString() : "0";

  useEffect(() => {
    const timer = setTimeout(() => {
      // @ts-ignore
      setopacity(1);
      // random timrout for airdrop info
    }, 14 * 1800);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="wincol">
      <Rewards ref={rewardsRef} />
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

        {isWin ? (
            <div className="col-md-4" style={{ opacity: opacity }}>
            <div className="coloredinfo">
              <a className="btn-main btn-black" target="_blank" onClick={rewardsModal}>Claim Rewards</a>
              <div className="coloredval">
                Winner! Congratulations!
                <div className="coloredbg">
                  Winner! Congratulations!
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
