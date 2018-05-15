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
  let stars = '';
  let counter = n;
  function drawClosure(n){
    while (counter > 0){
      if (n === 0){
        console.log(stars);
      } else {
        stars += '*';
        console.log(' '.repeat(n-1) + stars);  
        counter--;
        drawClosure(n - 1);
      }
    }
  }
  drawClosure(n);
}

module.exports = drawStairs;

console.log(drawStairs(6))
