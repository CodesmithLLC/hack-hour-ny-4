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
  const ydy = stock_prices_yesterday;
  let gain = 0;
  let low = 0;
  let high = 0;

  for(let i = 0; i < ydy.length; i++) {
    for(let j = 0 ; j < ydy.length; j++) {
      if(ydy[j] - ydy[i] > gain && j > i) {
        gain = ydy[j] - ydy[i];
        low = ydy[i];
        high = ydy[j];
      }
    }
  }
  if(low === high) return 0;
  else return gain;
}

module.exports = bestProfit;
