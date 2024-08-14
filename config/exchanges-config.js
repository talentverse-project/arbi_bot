module.exports = {
    binance: {
      baseUrl: 'https://api.binance.com',
      apiKey: process.env.BINANCE_API_KEY,
      apiSecret: process.env.BINANCE_API_SECRET,
    },
    okx: {
      baseUrl: 'https://www.okx.com',
      apiKey: process.env.OKX_API_KEY,
      apiSecret: process.env.OKX_API_SECRET,
    },
    kraken: {
      baseUrl: 'https://api.kraken.com',
      apiKey: process.env.KRAKEN_API_KEY,
      apiSecret: process.env.KRAKEN_API_SECRET,
    },
    bitget: {
      baseUrl: 'https://api.bitget.com',
      apiKey: process.env.BITGET_API_KEY,
      apiSecret: process.env.BITGET_API_SECRET,
    },
    mexc: {
      baseUrl: 'https://api.mexc.com',
      apiKey: process.env.MEXC_API_KEY,
      apiSecret: process.env.MEXC_API_SECRET,
    },
    bybit: {
      baseUrl: 'https://api.bybit.com',
      apiKey: process.env.BYBIT_API_KEY,
      apiSecret: process.env.BYBIT_API_SECRET,
    }
  };
  