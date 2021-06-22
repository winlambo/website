import React, { useEffect, useState } from "react";
import { keyframes } from "styled-components";

export interface SpinrotateProps {
  value?: string;
}

const Spinrotate: React.FC<SpinrotateProps> = ({ value }) => {
  return (
    <>
      <div className="lckybxinnr">
        {
          //@ts-ignore
          <div className="lckybxnum" style={{ top: `-${400 + 40 * value}px` }}>
            <div>0</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>0</div>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
          </div>
        }
      </div>
    </>
  );
};

export default Spinrotate;
