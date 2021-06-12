import React, { useState, useCallback } from 'react'

const Cookie: React.FC = () => {
    const [ishidden, setIshidden] = useState(false)
    return (
        <div className="cookie" style={{display:ishidden== true?"none":"flex"}}>
            <div>
                 By interacting with this site and all other Winlambo affiliated platforms, you confirm that you have checked your local, state, and national gambling and giveaway laws to make sure you're allowed to participate.
                 
            </div>
            <button onClick={()=>setIshidden(true)}>Close</button>
        </div>
    );
}


export default Cookie;
