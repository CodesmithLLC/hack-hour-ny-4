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
  // set the minimum for the whole day
  let dayMin = Infinity;
  // set the max possible profit
  let maxProfit = -Infinity;
  // maxProfit will be the highest price minus the low for the day so far
  // Loop through and check each price
  stock_prices_yesterday.forEach((price) => {
    dayMin = Math.min(price, dayMin);
    maxProfit = Math.max(price - dayMin, maxProfit);
  });
  // return maxProfit
  return maxProfit;
}
// const stockPrices = [90, 100, 80, 300, 400, 500, 520, 376, 56, 23];
// console.log(bestProfit(stockPrices));

// function bestProfit(stock_prices_yesterday) {
//   let dayMin = Infinity;
//   let maxProfit = -Infinity;
//   stock_prices_yesterday.forEach((price) => {
//     dayMin = Math.min(price, dayMin);
//     maxProfit = Math.max(price - dayMin, maxProfit);
//   });
//   return maxProfit;
// }

module.exports = bestProfit;
