require('dotenv').config();
const { getBinancePairs } = require('./exchanges/binance');
const { getOkxPairs } = require('./exchanges/okx');
const { getKrakenPairs } = require('./exchanges/kraken');
const { getBitgetPairs } = require('./exchanges/bitget');
const { getMexcPairs } = require('./exchanges/mexc');
const { getBybitPairs } = require('./exchanges/bybit');
const { findArbitrageOpportunities } = require('./services/arbitrage');
const { sendArbitrageMessage } = require('./services/telegram');

(async () => {
  try {
    const binanceData = await getBinancePairs();
    const okxData = await getOkxPairs();
    const krakenData = await getKrakenPairs();
    const bitgetData = await getBitgetPairs();
    const mexcData = await getMexcPairs();
    const bybitData = await getBybitPairs();

    const allPairsData = {
      binance: binanceData,
      okx: okxData,
      kraken: krakenData,
      bitget: bitgetData,
      mexc: mexcData,
      bybit: bybitData,
    };

    const opportunities = await findArbitrageOpportunities(allPairsData);

    for (const opportunity of opportunities) {
      await sendArbitrageMessage(process.env.TELEGRAM_CHAT_ID, opportunity);
    }
  } catch (error) {
    console.error('Error:', error);
  }

  // Бесконечный цикл для обновления данных
  setInterval(async () => {
    try {
      const binanceData = await getBinancePairs();
      const okxData = await getOkxPairs();
      const krakenData = await getKrakenPairs();
      const bitgetData = await getBitgetPairs();
      const mexcData = await getMexcPairs();
      const bybitData = await getBybitPairs();

      const allPairsData = {
        binance: binanceData,
        okx: okxData,
        kraken: krakenData,
        bitget: bitgetData,
        mexc: mexcData,
        bybit: bybitData,
      };

      const opportunities = await findArbitrageOpportunities(allPairsData);

      for (const opportunity of opportunities) {
        await sendArbitrageMessage(process.env.TELEGRAM_CHAT_ID, opportunity);
      }
    } catch (error) {
      console.error('Error during interval processing:', error);
    }
  }, 60000); // Обновление данных каждые 60 секунд
})();
