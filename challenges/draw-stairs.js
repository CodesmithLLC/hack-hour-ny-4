/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
  
    let base = '';
    for (let i = 1; i <= n; i++) {
      base += '*';
    }
    let baseStair = base;
    
    let staircase = [];
    console.log(staircase)
  
    while (baseStair.length <= 1) {
    let nextStair = baseStair.slice(0)
    staircase.push(nextStair);
    console.log(nextStair);
  }
  }
  


module.exports = drawStairs;
