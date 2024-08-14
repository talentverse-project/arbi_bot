// src/exchanges/okx.js

const axios = require('axios');
const config = require('../config/exchanges-config');

async function getOkxPairs() {
  const response = await axios.get(`${config.okx.baseUrl}/api/v5/market/tickers?instType=SPOT`);
  return response.data.data.map(pair => ({
    symbol: pair.instId.replace('-', ''),
    askPrice: parseFloat(pair.askPx),
    bidPrice: parseFloat(pair.bidPx),
  }));
}

module.exports = {
  getOkxPairs,
};
