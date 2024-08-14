// src/exchanges/bybit.js

const axios = require('axios');
const config = require('../config/exchanges-config');

async function getBybitPairs() {
  const response = await axios.get(`${config.bybit.baseUrl}/v2/public/tickers`);
  return response.data.result.map(pair => ({
    symbol: pair.symbol,
    askPrice: parseFloat(pair.ask_price),
    bidPrice: parseFloat(pair.bid_price),
  }));
}

module.exports = {
  getBybitPairs,
};
