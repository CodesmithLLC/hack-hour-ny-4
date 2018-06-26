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

// stock_prices_yesterday[60] = 500
// [60] = 60 minutes from 9:30am
// 9:30am - 4pm
// 9:30-10:30 [60], 10:30-11:30[120], 11:30-12:30[180], 12:30-1:30[240], 1:30-2:30[300], 2:30-3:30[360], 3:30-4:00pm[390]

function bestProfit(stock_prices_yesterday) {
  const currentPrices = stock_prices_yesterday.sort();

  const objectPrices = Object.assign({}, stock_prices_yesterday);
  console.log(objectPrices);
  console.log(currentPrices);

  const max = currentPrices[currentPrices.length - 1];
  const min = currentPrices[0];
  const profit = max - min;
  const boughtArr = [];
  const minArr = [];
  console.log(min, max);
  console.log(profit);


  for (const key in objectPrices) {
    if (objectPrices[key] === max) {
      boughtArr.push([key, objectPrices[key]]);
      console.log(key, objectPrices[key]);
    } else if (objectPrices[key] === min) {
      console.log(objectPrices[key]);
      minArr.push(key, objectPrices[key]);
      console.log(key);
    }
  }

  console.log(boughtArr);
  console.log(minArr);

//   if (stock_prices_yesterday == undefined || max === min) return 0;
//     else {



//     }
}

module.exports = bestProfit;

stock_prices_yesterday = [200, 235, 240, 230, 200, 255, 300, 220, 290, 300];
// stock_prices_yesterday = [200, 200, 200, 200]

console.log(bestProfit(stock_prices_yesterday));
