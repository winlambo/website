import { BigNumber, ethers } from "ethers";
import { getContractObj, getERC20Contract, LAMBO_FUND_ADDRESS, DAILY_FUND_ADDRESS } from ".";
import PairConfig, { QuoteToken } from "./types"
import Pairs from "./pairs"
import tokens from './tokens'

export async function getTicketInfo(chainId, account, provider) {
    const winlamboContract = getContractObj('WinLambo', chainId, provider)
    try {
        const tickets = await winlamboContract.lamboTickets(account)
        return tickets
    } catch (e) {
        console.error(e)
        return []
    }
}

export async function getAccountBalance(chainId, account, provider) {
    const winlamboContract = getContractObj('WinLambo', chainId, provider)
    try {
        const balance = await winlamboContract.balanceOf(account)
        return balance
    } catch (e) {
        console.error(e)
        return []
    }
}

export async function getLamboRandomNumber(chainId, provider) {
    const lamboRandomContract = getContractObj('LamboRandomNumber', chainId, provider)
    try {
        const winningnumber = await lamboRandomContract.lamboRandomResult()
        return winningnumber
    } catch (e) {
        console.error(e)
        return BigNumber.from(0)
    }
}


export async function getRandomNumbers(chainId, provider) {
    const n = 10
    const lamboRandomContract = getContractObj('LamboRandomNumber', chainId, provider)
    try {
        const potRandomResult = await lamboRandomContract.potRandomResult()
        const expandRandomResult = await lamboRandomContract.expand(potRandomResult, n)
        return expandRandomResult
    } catch (e) {
        console.error(e)
        return []
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
        return BigNumber.from(0)
    }
}

export async function getLamboFund(chainId, provider) {
    const tokenAddress = tokens.busd[chainId]
    const tokenContract = getERC20Contract(tokenAddress, provider)
    try {
        const tokenAmount = await tokenContract.balanceOf(LAMBO_FUND_ADDRESS)
        const ret = tokenAmount.mul(BigNumber.from(10).pow(2)).div(BigNumber.from(10).pow(18))
        return ret.toNumber() / 1e2
    } catch (e) {
        console.error(e)
        return 0
    }
}

export async function getDailyFund(chainId, provider) {
    const tokenAddress = tokens.busd[chainId]
    const tokenContract = getERC20Contract(tokenAddress, provider)
    try {
        const tokenAmount = await tokenContract.balanceOf(DAILY_FUND_ADDRESS)
        const ret = tokenAmount.mul(BigNumber.from(10).pow(2)).div(BigNumber.from(10).pow(18))
        return ret.toNumber() / 1e2
    } catch (e) {
        console.error(e)
        return 0
    }
}

export async function getDailyVolumeTicketsByAccount(account, chainId, provider) {
    const winlamboContract = getContractObj('WinLambo', chainId, provider)
    try {
        //const lowerRange = await winlamboContract.potTickets(account, 0)
        const lowerRange = BigNumber.from("445092356"); //wait winlamboContract.potTickets(account, 0)
        //const upperRange = await winlamboContract.potTickets(account, 1)
        const upperRange = BigNumber.from("500000001"); //await winlamboContract.potTickets(account, 1)
        const ticket = []
        if (lowerRange == upperRange) return []

        ticket.push(lowerRange)
        ticket.push(upperRange)
        const tickets = []
        tickets.push(ticket)
        return tickets
    } catch (e) {
        console.error(e)
        return []
    }
}

export async function isWinner(winningNumber, chainId, account, provider) {
    const winlamboContract = getContractObj('WinLambo', chainId, provider)
    try {
        const isWon = await winlamboContract.isLamboWinner(account, winningNumber)
        return isWon
    } catch (e) {
        console.error(e)
        return false
    }
}

export async function isCurrentDay(chainId, provider) {
    const lamboRandomContract = getContractObj('LamboRandomNumber', chainId, provider)
    try {
        const requestCount = await lamboRandomContract.potRequestCount()
        const recentReqId = await lamboRandomContract.potRequestHistory(requestCount.sub(BigNumber.from(1)))
        const resultTimestamp = await lamboRandomContract.potResultTimestamps(recentReqId)
        const lastTimestamp = resultTimestamp.toNumber()

        const baseTime = new Date();
        baseTime.setUTCHours(16);
        baseTime.setUTCMinutes(0);
        baseTime.setUTCSeconds(0);
        baseTime.setUTCMilliseconds(0);
        
        return lastTimestamp * 1000 > baseTime ? true : false
    } catch (e) {
        console.error(e)
        return false
    }
}

export async function getTop3PotTicketMembers(chainId, provider) {
    const winlamboContract = getContractObj('WinLambo', chainId, provider)
    try {
        const potTicketsMember1 = await winlamboContract.potTicketsMembers(0)
        const potTicketsMember2 = await winlamboContract.potTicketsMembers(1)
        const potTicketsMember3 = await winlamboContract.potTicketsMembers(2)
        const potTicketMembers = []
        potTicketMembers.push(potTicketsMember1)
        potTicketMembers.push(potTicketsMember2)
        potTicketMembers.push(potTicketsMember3)
        return potTicketMembers;

    } catch (e) {
        console.error(e)
        return []
    } 
}

export async function getWinningNumber (rawNumber, chainId, provider) {
    const randomNumberResult = rawNumber.toString()
    const zeroAddress = '0x0000000000000000000000000000000000000000'
    const winlamboContract = getContractObj('WinLambo', chainId, provider)
    try {
        let start = 0
        let winningNumberLength = 9
        let winningNumber = ''
        let zeroAddressWon = true
        let ticketNotMintedYet = true
        var ticketCounter = undefined;

        // get the winning number from the random number
        // redraw if the zero address is the winner
        // redraw if the winning ticket hasn't been minted yet
        while (zeroAddressWon || ticketNotMintedYet) {
            // skip zeros at the beginng of the winning number
            while (randomNumberResult.charAt(start) == "0") {
                start += 1;
                if (start > randomNumberResult.length - winningNumberLength) {
                    return ''
                }
            }
            winningNumber = randomNumberResult.slice(start, start + winningNumberLength)

            // determine if the winning number belongs to the zero address
            zeroAddressWon = await winlamboContract.isLamboWinner(zeroAddress, winningNumber)

            // determine if the winning number ticket hasn't been minted yet
            ticketCounter = await winlamboContract.ticketCounter();
            winningNumber = parseInt(winningNumber);
            ticketCounter = parseInt(ticketCounter);
            ticketNotMintedYet = ticketCounter <= winningNumber;
            
            // advance through the winning numbers
            start += winningNumberLength
            if (start + winningNumberLength > randomNumberResult.length) {
                break
            }
        }

        if (zeroAddressWon) {
            return ''
        } else {
            return winningNumber
        }
    } catch (e) {
        console.error(e)
        return ''
    }
}

export async function get14WinningNumber (account, randomNumbers, chainId, provider) {

    if (randomNumbers.length !== 2) return { totalWinNumbers : [], accountWinNumbers: []}

    const retWinningNumbers = []
    const retAccountWinNumbers = []
    const winlamboContract = getContractObj('WinLambo', chainId, provider)

    for (let idx = 0; idx < randomNumbers.length; idx++) {
        const rawNumber = randomNumbers[idx]
        const randomNumberResult = rawNumber.toString()
        const zeroAddress = '0x0000000000000000000000000000000000000000'

        try {
            let start = 0
            let winningNumberLength = 9
            let winningNumber = ''
            let counter = 1
    
            while (start + winningNumberLength <= randomNumberResult.length) {

                if (counter > 7) break;
                // skip zeros at the beginng of the winning number
                while (randomNumberResult.charAt(start) == "0") {
                    start += 1;
                    if (start > randomNumberResult.length - winningNumberLength) {
                        break;
                    }
                }
                winningNumber = randomNumberResult.slice(start, start + winningNumberLength)
                //let winner = await winlamboContract.potWinner(winningNumber)
                let winner = account;
                if (counter % 2 == 0) {
                    if (winner === account) {
                        retAccountWinNumbers.push(parseInt(winningNumber));
                        //accountWinNumber = parseInt(winningNumber)
                    }
                }
                retWinningNumbers.push(parseInt(winningNumber))
    
                // advance through the winning numbers
                start += winningNumberLength
                counter += 1
            }
        } catch (e) {
            console.error(e)
        }
    }
    return {
        totalWinNumbers: retWinningNumbers,
        accountWinNumbers: retAccountWinNumbers
    }
}

export async function get4LuckyHolders (account, randomNumbers, chainId, provider) {

    if (randomNumbers.length === 0) return {
        luckyWinNumber : [],
        accountLuckyHolders : []
    }

    const retLuckyWinningNumbers = []
    const accountWinNumbers = []
    const winlamboContract = getContractObj('WinLambo', chainId, provider)
    let ticketCounter = await winlamboContract.ticketCounter();

    for (let idx = 0; idx < randomNumbers.length; idx++) {
        const rawNumber = randomNumbers[idx]
        const randomNumberResult = rawNumber.toString()
        const zeroAddress = '0x0000000000000000000000000000000000000000'
        try {
            let start = 0
            let winningNumberLength = 9
            let winningNumber = ''
            let zeroAddressWon = true
            let ticketNotMintedYet = true
    
            // get the winning number from the random number
            // redraw if the zero address is the winner
            // redraw if the winning ticket hasn't been minted yet
            while (zeroAddressWon || ticketNotMintedYet) {
                // skip zeros at the beginng of the winning number
                while (randomNumberResult.charAt(start) == "0") {
                    start += 1;
                    if (start > randomNumberResult.length - winningNumberLength) {
                        ticketNotMintedYet = false
                        break
                    }
                }
                if (!ticketNotMintedYet) break

                winningNumber = randomNumberResult.slice(start, start + winningNumberLength)
                winningNumber = parseInt(winningNumber);
    
                // determine if the winning number belongs to the zero address
                zeroAddressWon = await winlamboContract.isLamboWinner(zeroAddress, winningNumber)
    
                // determine if the winning number ticket hasn't been minted yet
                ticketCounter = parseInt(ticketCounter);
                ticketNotMintedYet = ticketCounter <= winningNumber;
                
                // advance through the winning numbers
                start += winningNumberLength
                if (start + winningNumberLength > randomNumberResult.length) {
                    break
                }
            }

            if (winningNumber < 100000001 || winningNumber > 999999999) {
                console.log("Reached end of random number and no winning ticket was found. Next...")
                continue
            } else {
                //retLuckyWinningNumbers.push(winningNumber)
                retLuckyWinningNumbers.push(376518306);
                accountWinNumbers.push(376518306)
                retLuckyWinningNumbers.push(376518317);
                accountWinNumbers.push(376518317)
                retLuckyWinningNumbers.push(576518306);
                retLuckyWinningNumbers.push(676518306);

                let winner = await winlamboContract.isLamboWinner(account, winningNumber)
                if (winner) {
                    accountWinNumbers.push(winningNumber)
                }
            }
            
            if (retLuckyWinningNumbers.length === 4) break
    
        } catch (e) {
            console.error(e)
            continue
        }
    }


    return {
        luckyWinNumber : retLuckyWinningNumbers,
        accountLuckyHolders : accountWinNumbers
    }

}
