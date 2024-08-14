// src/services/arbitrage.js

async function findArbitrageOpportunities(allPairsData) {
  const opportunities = [];

  const exchanges = Object.keys(allPairsData);

  // Простое сравнение цен между биржами
  for (let i = 0; i < exchanges.length - 1; i++) {
    for (let j = i + 1; j < exchanges.length; j++) {
      const exchangeA = exchanges[i];
      const exchangeB = exchanges[j];
      
      const pairsA = allPairsData[exchangeA];
      const pairsB = allPairsData[exchangeB];

      pairsA.forEach(pairA => {
        const pairB = pairsB.find(p => p.symbol === pairA.symbol);

        if (pairB) {
          const profitAB = pairB.askPrice - pairA.bidPrice;
          const profitBA = pairA.askPrice - pairB.bidPrice;

          if (profitAB > 0) {
            opportunities.push({
              pair: pairA.symbol,
              buyExchange: exchangeA,
              sellExchange: exchangeB,
              buyPrice: pairA.bidPrice,
              sellPrice: pairB.askPrice,
              profit: profitAB,
            });
          }

          if (profitBA > 0) {
            opportunities.push({
              pair: pairA.symbol,
              buyExchange: exchangeB,
              sellExchange: exchangeA,
              buyPrice: pairB.bidPrice,
              sellPrice: pairA.askPrice,
              profit: profitBA,
            });
          }
        }
      });
    }
  }

  return opportunities;
}

module.exports = {
  findArbitrageOpportunities,
};
