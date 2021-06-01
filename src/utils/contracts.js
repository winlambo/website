import { BigNumber, ethers } from "ethers";
import { getContractObj, getERC20Contract } from ".";
import PairConfig, { QuoteToken } from "./types"
import Pairs from "./pairs"

export async function getTicketInfo(chainId, account, provider) {
    const winlamboContract = getContractObj('WinLambo', chainId, provider)
    try {
        const tickets = await winlamboContract.lamboTickets(account);
        return tickets
    } catch (e) {
        console.error(e)
        return null
    }
}

export async function getViolaPrice(chainId, provider) {
    const pairId = 0
    const pair = Pairs.find(item => item.pairId === pairId)
    const lpAddress = pair.lpAddresses[chainId]
    const tokenAddress = pair.tokenAddresses[chainId]
    const quoteTokenAddress = pair.quoteTokenAddresses[chainId]
    const quoteTokenSymbol = pair.quoteTokenSymbol
    const tokenDecimal = BigNumber.from(10).pow(pair.tokenDecimals)
    const quoteTokenDecimal = BigNumber.from(10).pow(pair.quoteTokenDecimals)

    const tokenContract = getERC20Contract(tokenAddress, provider)
    const quoteTokenContract = getERC20Contract(quoteTokenAddress, provider)
    try {
        const tokenAmount = await tokenContract.balanceOf(lpAddress)
        const quoteTokenAmount = await quoteTokenContract.balanceOf(lpAddress)
        const tokenPriceVSQuote = quoteTokenAmount.mul(BigNumber.from(10).pow(8)).mul(tokenDecimal).div(tokenAmount).div(quoteTokenDecimal)
        let tokenPriceBUSD;
        if (quoteTokenSymbol === QuoteToken.BNB) {
            const bnbToBusd = await getBnbToBusdPrice(chainId, provider)
            console.info(bnbToBusd.toNumber())
            tokenPriceBUSD = bnbToBusd.mul(tokenPriceVSQuote)
        } else {
            tokenPriceBUSD = tokenPriceVSQuote
        }
        return tokenPriceBUSD.toNumber() / 1e8
    } catch (e) {
        console.error(e)
        return 0
    }
}

export async function getBnbToBusdPrice(chainId, provider) {
    const pairId = 1;
    const pair = Pairs.find(item => item.pairId === pairId)
    const lpAddress = pair.lpAddresses[chainId]
    const tokenAddress = pair.tokenAddresses[chainId]
    const quoteTokenAddress = pair.quoteTokenAddresses[chainId]
    const tokenContract = getERC20Contract(tokenAddress, provider)
    const quoteTokenContract = getERC20Contract(quoteTokenAddress, provider)
    try {
        const tokenAmount = await tokenContract.balanceOf(lpAddress)
        const quoteTokenAmount = await quoteTokenContract.balanceOf(lpAddress)
        return quoteTokenAmount.div(tokenAmount)
    } catch (e) {
        console.error(e)
        return new BigNumber(0)
    }

}

