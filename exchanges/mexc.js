// src/exchanges/mexc.js

const axios = require('axios');
const config = require('../config/exchanges-config');

async function getMexcPairs() {
  const response = await axios.get(`${config.mexc.baseUrl}/api/v3/ticker/bookTicker`);
  return response.data.map(pair => ({
    symbol: pair.symbol,
    askPrice: parseFloat(pair.askPrice),
    bidPrice: parseFloat(pair.bidPrice),
  }));
}

module.exports = {
  getMexcPairs,
};
