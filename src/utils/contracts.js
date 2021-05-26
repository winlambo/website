import { BigNumber, ethers } from "ethers";
import { getContractObj } from ".";

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