import { BigNumber } from '@ethersproject/bignumber';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers'
import axios from 'axios';
import { ethers } from 'ethers';
import React, { useEffect, useRef, useState, ElementRef } from 'react';
import { BSC_LAUNCH_TIME, EXCLUDE_LIST, TOKEN_DECIMALS,  } from '../../utils/constants';

import { useSelector } from 'react-redux';
import { AppState } from '../../state';
import { TitleWrapperDiv, InfoIcon } from './Styled/index';
import InfoModal from './Popup/InfoModal';

interface ITopAccount {
    address: any,
    amount: any
}

const Top: React.FC = () => {

    const [topAccounts, setTopAccounts] = useState<ITopAccount[]>([])
    const [accountVolume, setAccountVolume] = useState('')
    const [isAccountTop100, setIsAccountTop100] = useState<boolean>()

    const startBlockNumber = useSelector<AppState, AppState['application']['startBlockNumber']>((state) => state.application.startBlockNumber);
    const endBlockNumber   = useSelector<AppState, AppState['application']['endBlockNumber']>((state) => state.application.endBlockNumber);

    const {account} = useWeb3React<Web3Provider>()

    type IRef = ElementRef<typeof InfoModal>;
    const infoModalRef = useRef<IRef>(null);

    // show info modal
    function infoModal() {
        infoModalRef.current?.openModal();
    }

    useEffect(() => {
                // get top 100 leaders
        if (startBlockNumber == "") return undefined;
                const apiEndPoint =  'https://api.bscscan.com/api?module=account&action=tokentx&contractAddress=0x6a79e08db6c08b8f88703794bf1a47f5a01eb9dc&startblock=' + startBlockNumber + '&endblock=' + endBlockNumber + '&sort=desc&apiKey=25BTGGRTJN6KFU7M6DRE25FUKJENDQ98HI'
            setTimeout(function(){
            axios.get(apiEndPoint).then((response) => {
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
                                balances.delete(EXCLUDE_LIST[i].toLowerCase())
                            }
                             
                            // set the volume of the connected wallet to 0 if it does not exist
                            var accountLower = account?.toLowerCase();
                            if (balances.get(accountLower) === undefined) {
                                setIsAccountTop100(false);
                                setAccountVolume("0.00");
                            } else {
                                setAccountVolume((+ethers.utils.formatUnits(balances.get(accountLower), TOKEN_DECIMALS)).toFixed(2));
                            }

                            const descBalances = Array.from(balances).sort((a, b) => {
                                return b[1].gt(a[1]) ? 1 : -1;
                            })
                            console.log('descBalances = ', descBalances.length)
                            let topCount = 0
                            const topHolders = []
                            for (let i = 0; i < descBalances.length; i++) {
                                if (topCount < 100) {
                                    topHolders.push({address: descBalances[i][0], amount: (+ethers.utils.formatUnits(descBalances[i][1], TOKEN_DECIMALS)).toFixed(2)})
                                }
                                topCount++;
                            }
                            
                            if (topHolders.length > 0) {
                                setTopAccounts(topHolders)
                            
                                // determine whether connected wallet is in top 100 volume
                                for (let i = 0; i < topHolders.length; i++ ) {
                                    if (topHolders[i].address === accountLower) {
                                        setIsAccountTop100(true);
                                        break;
                                    }
                                }
                            }
                        }
                    }
                })
            }, 10000)
    }, [startBlockNumber, account])
    

    // create table of top 100 volume
    const Ranklist = []
    for (let i = 0; i < topAccounts.length; i++) {
        let imgIdx = i + 1
        var sno = i < 3 ? (<img src={'images/' + imgIdx + '.png'} />) : (imgIdx);

        var temp = (<div className={topAccounts[i].address === account?.toLowerCase() ? "row green" : "row"} key={i}>
            <div className="cl1">
                <div className="sno">{sno}</div>
                <div className="addrs">{topAccounts[i].address}</div>
            </div>
            <div className="cl2">{topAccounts[i].amount}</div>
        </div>);
        Ranklist.push(temp)
    }
    
    // if the connected wallet is not part of the top 100 active traders, show
    // its balance at the top of the sheet, and highlight it green
    if (topAccounts.length > 0) {
        if (!isAccountTop100) {
            var temp = (<div className="row green" key="?">
                <div className="cl1">
                    <div className="sno">?</div>
                    <div className="addrs">{account}</div>
                </div>
                <div className="cl2">{accountVolume}</div>
            </div>);
            Ranklist.unshift(temp)
        }
    }


    return (
        <section className="bg-black top-sec">
            <InfoModal ref={infoModalRef} content="top"/>
            <div className="container">
                <TitleWrapperDiv>
                <h1>Today's Top <span id="val">100</span> Active Traders</h1>
                    <InfoIcon className="fas fa-info-circle" onClick={infoModal}></InfoIcon>
                </TitleWrapperDiv>
                <div className="toptable">
                    <div className="row rowhead">
                        <div className="cl1">
                            <div className="sno">No</div>
                            <div>Address</div>
                        </div>
                        <div className="cl2">WINLAMBO Traded</div>
                    </div>

                    {Ranklist}
                </div>
            </div>
        </section>
    );
}


export default Top;
