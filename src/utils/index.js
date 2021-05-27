import { Contract } from '@ethersproject/contracts'
import axios from 'axios';
import WinLamboABI from '../contracts/WinLambo.json'


export const Networks = {
  MainNet: 56,
  Testnet: 97,
}

export const CONTRACTS_BY_NETWORK = {
  [Networks.MainNet]: {
    WinLambo: {
      address: '0x89c42a21b92622C96e48793d25b2dffD194E1dB4',
      abi: WinLamboABI,
    }
  },
  [Networks.Testnet]: {
    WinLambo: {
      address: '',
      abi: WinLamboABI,
    }
  },
}

export const currentNetwork = process.env.REACT_APP_NETWORK_ID;

export function getContractInfo(name, chainId = null) {
  if(!chainId) chainId = currentNetwork;

  const contracts = CONTRACTS_BY_NETWORK?.[chainId];
  if(contracts) {
    return contracts?.[name];
  }else{
    return null;
  }
}

export function getContractObj(name, chainId, provider) {
  const info = getContractInfo(name, chainId);
  return !!info && new Contract(info.address, info.abi, provider);
}

export const shorter = (str) =>
  str?.length > 8 ? str.slice(0, 6) + '...' + str.slice(-4) : str

export const API_ENDPOINT = 'https://api.bscscan.com/api?module=account&action=tokentx&contractAddress=0x89c42a21b92622C96e48793d25b2dffD194E1dB4&startblock=0&endblock=999999999999&sort=desc'

export const EXCLUDE_LIST = [
  "0x0000000000000000000000000000000000000000", // zero address
  "0x9aF5C9F7F60045baa884c6f85E144d249A017CC9", // deployer
  "0x447AAa7e8cF91F2DEcbaD051B8A30190E47244d7", // LP Pair
]

export const TOKEN_DECIMALS = 9

export function getLastTxAPI() {

  let today = new Date();
  const dd = String(today.getUTCDate()).padStart(2, '0');
  const mm = String(today.getUTCMonth() + 1).padStart(2, '0'); //January is 0!
  const yyyy = today.getUTCFullYear();
  today = mm + '/' + dd + '/' + yyyy + ' 00:00:00 GMT';
  const baseTimeOfToday = Date.parse(today) / 1000
  const blockPerDay = 28800 
  const endPointGetBlockNumber = 'https://api.bscscan.com/api?module=block&action=getblocknobytime&timestamp=' + baseTimeOfToday +'&closest=before'

  axios.get(endPointGetBlockNumber).then(response => {
    let startBlockNumber = 0
    let endBlockNumber = 0
    if (response.status === 200 && response.data.status === '1') {
      endBlockNumber = parseInt(response.data.result)
      startBlockNumber = endBlockNumber - blockPerDay
      let apiEndPoint =  'https://api.bscscan.com/api?module=account&action=tokentx&contractAddress=0x89c42a21b92622C96e48793d25b2dffD194E1dB4&startblock=' + startBlockNumber + '&endblock=' + endBlockNumber + '&sort=desc'
      return apiEndPoint
    } 
  })
  // const response = await axios.get(endPointGetBlockNumber)
  // return API_ENDPOINT
}
