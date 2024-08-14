// src/services/telegram.js

const TelegramBot = require('node-telegram-bot-api');
const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, { polling: true });

async function sendArbitrageMessage(chatId, opportunity) {
  const message = `
    Arbitrage Opportunity:
    Pair: ${opportunity.pair}
    Buy on: ${opportunity.buyExchange} at ${opportunity.buyPrice}
    Sell on: ${opportunity.sellExchange} at ${opportunity.sellPrice}
    Profit: ${opportunity.profit.toFixed(2)} USDT
  `;
  await bot.sendMessage(chatId, message);
}

module.exports = {
  sendArbitrageMessage,
};
