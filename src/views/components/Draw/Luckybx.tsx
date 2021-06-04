
import React from 'react';

export interface LuckybxProps {
    value?: string
}
const Luckybx: React.FC<LuckybxProps> = ({value}) => {
    return (
        <>
            <div className="lckybxinnr">
                <div className="lckybxinnr">{value}</div>
            </div>
        </>
    );
}

export default Luckybx;
            