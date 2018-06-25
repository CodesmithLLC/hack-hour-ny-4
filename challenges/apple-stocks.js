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


function bestProfit(stock_prices_yesterday) {
  const minPrice = Math.min(...stock_prices_yesterday);
  let maxPrice;
  for (const currentPrice of stock_prices_yesterday) {
    maxPrice = currentPrice > Math.max(...stock_prices_yesterday) ?
      currentPrice : Math.max(...stock_prices_yesterday);
  }
  const maxProfit = maxPrice - minPrice;
  if (stock_prices_yesterday === null || maxProfit <= 0) return 0;
  return maxProfit;
}
// const stockPrices = [90, 100, 80, 300, 400, 500];
// console.log(bestProfit(stockPrices));

module.exports = bestProfit;
