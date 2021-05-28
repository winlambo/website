import { BigNumber } from '@ethersproject/bignumber';
import axios from 'axios';
import { ethers } from 'ethers';
import React, { useEffect, useMemo, useState } from 'react';
import { API_ENDPOINT, BSC_LAUNCH_TIME, EXCLUDE_LIST, TOKEN_DECIMALS } from '../../utils';

interface ITopAccount {
    address: any,
    amount: any
}

const Top: React.FC = () => {

    
    const [topAccounts, setTopAccounts] = useState<ITopAccount[]>([])

    const blockPerDay = 28800 
    const today = new Date()
    const dd = String(today.getUTCDate()).padStart(2, '0');
    const mm = String(today.getUTCMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getUTCFullYear();
    let baseOftoday = mm + '/' + dd + '/' + yyyy + ' 00:00:00 GMT';
    const baseTimeOfToday = Date.parse(baseOftoday) / 1000
    const endBlock = Math.round((baseTimeOfToday - BSC_LAUNCH_TIME.BLOCK_TIMESTEMP) / BSC_LAUNCH_TIME.BLOCK_TIME + BSC_LAUNCH_TIME.BLOCK_HEIGHT);
    const startBlock = endBlock - blockPerDay
    const topAccountsAPI = 'https://api.bscscan.com/api?module=account&action=tokentx&contractAddress=0x569bD611fc8A799AF49b18395E0147AdC152934e&startblock=' + startBlock + '&endblock=' + endBlock + '&sort=desc'

    useEffect(() => {
        if (topAccountsAPI) { 
            setTimeout(function(){
                axios.get(topAccountsAPI).then((response) => {
                    console.info(response)
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
            }, 10000)

        }
    }, [topAccountsAPI])


    
    
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
