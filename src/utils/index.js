import { Contract } from '@ethersproject/contracts'
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
