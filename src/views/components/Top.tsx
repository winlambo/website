import React from 'react';

const Top: React.FC = () => {
    const Ranklist = []
    for (let i = 1; i < 10; i++) {
        var sno = i <= 3 ? (<img src={'images/' + i + '.png'} />) : (i);

        var temp = (<div className="row">
            <div className="cl1">
                <div className="sno">{sno}</div>
                <div className="addrs">0x250af4d8a771ad1e4d81d54771ff72fa05f1a762</div>
            </div>
            <div className="cl2">100003240</div>
        </div>);
        Ranklist.push(temp)
    }
    return (
        <section className="bg-white top-sec">
            <div className="container">
                <h1>Top <span id="val">100</span> winlambo Chads</h1>
                <div className="toptable">
                    <div className="row rowhead">
                        <div className="cl1">
                            <div className="sno">No</div>
                            <div>Address</div>
                        </div>
                        <div className="cl2">Amount</div>
                    </div>
                    {Ranklist}
                </div>
            </div>
        </section>
    );
}


export default Top;
