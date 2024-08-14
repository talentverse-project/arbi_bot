// src/exchanges/kraken.js

const axios = require('axios');
const config = require('../config/exchanges-config');

async function getKrakenPairs() {
  const response = await axios.get(`${config.kraken.baseUrl}/0/public/Ticker?pair=all`);

  // Добавьте это, чтобы увидеть полный ответ в случае ошибки
  console.log(response.data);

  if (!response.data || !response.data.result) {
    throw new Error('Unexpected response from Kraken API');
  }

  const pairs = response.data.result;
  
  return Object.keys(pairs).map(symbol => ({
    symbol: symbol,
    askPrice: parseFloat(pairs[symbol].a[0]),
    bidPrice: parseFloat(pairs[symbol].b[0]),
  }));
}

module.exports = {
  getKrakenPairs,
};
