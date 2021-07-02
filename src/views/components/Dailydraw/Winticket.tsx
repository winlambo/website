import React, { useEffect, useState } from 'react';
import { keyframes } from "styled-components";

export interface LuckybxProps {
    value?: string
}


const Winticket: React.FC<LuckybxProps> = ({value}) => {
    return (
        <>
            <div className="lckybxinnr">
                {//@ts-ignore
                <div className="lckybxnum" style={{top:`-${1200 + 120*value}px`}}>
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
}

export default Winticket;
            