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
    if (!Array.isArray(stock_prices_yesterday)){
        return 0;
    } else {
    let currProfit=0;
    for (let i = 0; i < stock_prices_yesterday.length; i++){
        let currentIdx = stock_prices_yesterday[i];
        for (let j = i + 1; j < stock_prices_yesterday.length; j++){
            let lastProfit = stock_prices_yesterday[j] - currentIdx;
           if (lastProfit > currProfit){
               currProfit = lastProfit;
           }
        }
    }
    //console.log(currProfit);
    
       return currProfit;
    }
}


// function bestProfit(stock_prices_yesterday) {
// let bestSalePrice = Math.max(...stock_prices_yesterday)
// let bestBuyPrice = Math.min(...stock_prices_yesterday);
// let profit = bestSalePrice - bestBuyPrice;

//    return profit;
// }

console.log(bestProfit([100,300,500,200,50,150,950]));
//console.log(bestProfit(8));

module.exports = bestProfit;

// function bestProfit(stock_prices_yesterday) {
//     // set the minimum for the whole day
//     let dayMin = Infinity;
//     // set the max possible profit
//     let maxProfit = -Infinity;
//     // maxProfit will be the highest price minus the low for the day so far
//     // Loop through and check each price
//     stock_prices_yesterday.forEach((price) => {
//       dayMin = Math.min(price, dayMin);
//       maxProfit = Math.max(price - dayMin, maxProfit);
//     });
//     // return maxProfit
//     return maxProfit;
//   }
