import tokens from './tokens'
import { PairConfig, QuoteToken } from './types'

const pairs: PairConfig[] = [
  {
    pairId: 0,
    lpSymbol: 'WINLAMBO-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0414E30A875A81a892f02265426166f48969456d',
    },
    tokenSymbol: 'WINLAMBO',
    tokenAddresses: {
      97: '',
      56: '0x6a79e08db6c08b8f88703794bf1a47f5a01eb9dc',
    },
    tokenDecimals: 9,
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAddresses: tokens.wbnb,
    quoteTokenDecimals: 18,
  },
  {
    pairId: 1,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    tokenDecimals: 18,
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAddresses: tokens.busd,
    quoteTokenDecimals: 18,
  },   
]

export default pairs
