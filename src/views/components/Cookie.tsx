import React, { useState, useCallback } from 'react'

const Cookie: React.FC = () => {
    const [ishidden, setIshidden] = useState(false)
    return (
        <div className="cookie" style={{display:ishidden== true?"none":"flex"}}>
            <div>
                I confirm that I have reviewed all applicable federal, state, provincial and local laws, regulations, ordinances and codes of my country ("Codes"), and my actions have not violated or otherwise not complied with the applicable Codes.
                If a charge occurs, whether by me or by the Codes, which results in noncompliance of the Codes, I shall promptly notify WinLambo and cease actions that result in a violation or noncompliance of the Codes.
            </div>
            <button onClick={()=>setIshidden(true)}>Close</button>
        </div>
    );
}


export default Cookie;
