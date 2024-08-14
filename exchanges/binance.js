const axios = require('axios');
const config = require('../config/exchanges-config');

async function getBinancePairs() {
  const response = await axios.get(`${config.binance.baseUrl}/api/v3/ticker/bookTicker`);
  return response.data;
}

module.exports = {
  getBinancePairs,
};
