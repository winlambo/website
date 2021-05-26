import { BigNumber } from '@ethersproject/bignumber';
import axios from 'axios';
import { ethers } from 'ethers';
import React, { useEffect, useMemo, useState } from 'react';
import { API_ENDPOINT, EXCLUDE_LIST, TOKEN_DECIMALS } from '../../utils';

interface ITopAccount {
    address: any,
    amount: any
}

const Top: React.FC = () => {

    
    const [topAccounts, setTopAccounts] = useState<ITopAccount[]>([])
    
    axios.get(API_ENDPOINT).then((response) => {
        if (response.status === 200) {
            const holderList = response.data.result
            if (holderList) {
                let balances = new Map()
                 let results = holderList;
                for (let i=0; i<results.length; i++) {
                  let result = results[i];
                  if (!result.value) continue
                  let value = BigNumber.from(result.value);
                    
                    // initialize the balance of an unseen sender
                    // or increase it by the transaction value
                    if (balances.get(result.from) === undefined) {
                        balances.set(result.from, value);
                    }
                    else {
                        balances.set(result.from, balances.get(result.from).add(value));
                    }
            
                    // initialize the balance of an unseen receiver
                    // or increase it by the transaction value
                    if (balances.get(result.to) === undefined) {
                        balances.set(result.to, value);
                    }
                    else {
                        balances.set(result.to, balances.get(result.to).add(value));
                    }
            
                    // if the sender and receiver are the same user
                    // i.e. someone sent tokens to themselves to generate volume
                    // then subtract the amount that they sent so that they're not getting double the volume
                    // because technically they only paid fees on it once
                    if (result.from == result.to) {
                        balances.set(result.from, balances.get(result.from).sub(value));
                    }
                }
                // remove all excluded addresses
                for (let i=0; i< EXCLUDE_LIST.length; i++) {
                    balances.delete(EXCLUDE_LIST[i])
                }

                const descBalances = Array.from(balances).sort((a, b) => {
                    return b[1].gt(a[1]) ? 1 : -1;
                })
                const topCount = descBalances.length > 100 ? 100 : descBalances.length
                const topHolders = []
                for (let i = 0; i < topCount; i++) {
                    topHolders.push({address: descBalances[i][0], amount: (+ethers.utils.formatUnits(descBalances[i][1], TOKEN_DECIMALS)).toFixed(2)})
                }
                
                if (topHolders.length > 0) {
                    setTopAccounts(topHolders)
                }

            }
      
        }
    })
    
    
    const Ranklist = []
    for (let i = 0; i < topAccounts.length; i++) {
        let imgIdx = i + 1
        var sno = i < 3 ? (<img src={'images/' + imgIdx + '.png'} />) : (imgIdx);

        var temp = (<div className="row" key={i}>
            <div className="cl1">
                <div className="sno">{sno}</div>
                <div className="addrs">{topAccounts[i].address}</div>
            </div>
            <div className="cl2">{topAccounts[i].amount}</div>
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
