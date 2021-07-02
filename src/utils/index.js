import { Contract } from '@ethersproject/contracts'
import WinLamboABI from '../contracts/WinLambo.json'
import MulticallABI from '../contracts/Multicall.json'
import ERC20ABI from '../contracts/erc20.json'
import LamboRandomNumberABI from '../contracts/LamboRandomNumber.json'


export const Networks = {
  MainNet: 56,
  Testnet: 97,
}

export const CONTRACTS_BY_NETWORK = {
  [Networks.MainNet]: {
    WinLambo: {
      address: '0x6a79e08db6c08b8f88703794bf1a47f5a01eb9dc',
      abi: WinLamboABI,
    },
    Multicall: {
      address: '0x1ee38d535d541c55c9dae27b12edf090c608e6fb',
      abi: MulticallABI
    },
    LamboRandomNumber: {
      address: '0x7Bd9bC770685874a91DAe27D709742D5025D6348',
      abi: LamboRandomNumberABI
    },
  },
  [Networks.Testnet]: {
    WinLambo: {
      address: '',
      abi: WinLamboABI,
    },
    Multicall: {
      address: '0x67ADCB4dF3931b0C5Da724058ADC2174a9844412',
      abi: MulticallABI
    },
    LamboRandomNumber: {
      address: '',
      abi: LamboRandomNumberABI
    },
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

export function getERC20Contract(address, provider) {
  return new Contract(address, ERC20ABI, provider)
}

export const shorter = (str) =>
  str?.length > 8 ? str.slice(0, 6) + '...' + str.slice(-4) : str

export const LAMBO_FUND_ADDRESS = '0x8dA5e332A088779be241C79B8ffe53003E4529A2'
export const DAILY_FUND_ADDRESS = '0xb61ED72A55fF87A2b731E8d247555c1eE499a56A'
export const TOTAL_SUPPLY = 650000000

