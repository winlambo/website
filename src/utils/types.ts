export enum QuoteToken {
    'BNB' = 'BNB',
    'BUSD' = 'BUSD',
    'WINLAMBO' = 'WINLAMBO',
}

export interface Address {
    97?: string
    56: string
}

export interface PairConfig {
    pairId: number
    lpSymbol: string
    lpAddresses: Address
    tokenSymbol: string
    tokenAddresses: Address
    tokenDecimals: number
    quoteTokenSymbol: QuoteToken
    quoteTokenAddresses: Address
    quoteTokenDecimals: number
}