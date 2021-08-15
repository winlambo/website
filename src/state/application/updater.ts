import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';

import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers'

import axios from 'axios';
import { updateEndBlockNumber, updateStartBlockNumber } from "./actions";

export default function Updater(): null {
    const dispatch = useDispatch();
    const {account} = useWeb3React<Web3Provider>();
    // set the start time to the beginning of the week
    // this means Sunday at 16:00 UTC
    const startTime = new Date();
    startTime.setUTCHours(16);
    startTime.setUTCMinutes(0);
    startTime.setUTCSeconds(0);
    startTime.setUTCMilliseconds(0);
    var todayDate = startTime.getUTCDate();  // day of the month
    var todayDay = startTime.getUTCDay();  // day of the week
    startTime.setUTCDate(todayDate - todayDay);  // set to beginning of the week

    // the end time is now
    const endTime = new Date();

    // if the start time is in the future, then set it to the previous week
    // this happens on Sundays only
    if (startTime >= endTime) {
        startTime.setUTCDate(todayDate - 7);
    }

    // get the start and end times in seconds since epoch
    const baseTimeOfStart = Date.parse(startTime.toString()) / 1000
    const baseTimeOfCurrent = Date.parse(endTime.toString()) / 1000

    // build the API requests for the start and end blocks
    const endPointGetStartBlockNumber = 'https://api.bscscan.com/api?module=block&action=getblocknobytime&timestamp=' + baseTimeOfStart +'&closest=after&apiKey=25BTGGRTJN6KFU7M6DRE25FUKJENDQ98HI'
    const endPointGetEndBlockNumber = 'https://api.bscscan.com/api?module=block&action=getblocknobytime&timestamp=' + baseTimeOfCurrent +'&closest=before&apiKey=25BTGGRTJN6KFU7M6DRE25FUKJENDQ98HI'
    
    useEffect(() => {
        axios.get(endPointGetStartBlockNumber).then(response => {
            if (response.status === 200 && response.data.status === '1') {
                var startBlockNumber = parseInt(response.data.result);
                startBlockNumber += 1;
                dispatch(updateStartBlockNumber({blockNumber: startBlockNumber.toString()}));
                // get end block number
                axios.get(endPointGetEndBlockNumber).then(secondResponse => {
                    if (secondResponse.status === 200 && secondResponse.data.status === '1') {
                        var endBlockNumber = parseInt(secondResponse.data.result);
                        dispatch(updateEndBlockNumber({blockNumber: endBlockNumber.toString()}))
                    } 
                })    
            } 
        })
    }, [dispatch, account])
    return null;
}
