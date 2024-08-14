// src/exchanges/bitget.js

const axios = require('axios');
const config = require('../config/exchanges-config');

async function getBitgetPairs() {
  const response = await axios.get(`${config.bitget.baseUrl}/api/spot/v1/market/tickers`);
  return response.data.data.map(pair => ({
    symbol: pair.symbol.replace('_', ''),
    askPrice: parseFloat(pair.askPrice),
    bidPrice: parseFloat(pair.bidPrice),
  }));
}

module.exports = {
  getBitgetPairs,
};
