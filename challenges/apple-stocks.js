/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */

const stockPrices = [90, 100, 80, 300, 400, 500];

function bestProfit(stockPricesYesterday) {
  const minPrice = Math.min(...stockPricesYesterday);
  let maxPrice;
  for (const currentPrice of stockPrices) {
    maxPrice = currentPrice > Math.max(...stockPricesYesterday) ?
      currentPrice : Math.max(...stockPricesYesterday);
  }
  const maxProfit = maxPrice - minPrice;
  if (stockPricesYesterday === null || maxProfit <= 0) return 0;
  return maxProfit;
}
// console.log(bestProfit(stockPrices));

module.exports = bestProfit;
