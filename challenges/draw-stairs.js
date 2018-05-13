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

function drawStairs(n, stars = '') {
  let space = ' ';
  if (n === 0){
    console.log(stars);
  } else {
    console.log(space.repeat(n) + stars);
    drawStairs(n - 1, stars + '*' )
  }
}

module.exports = drawStairs;

console.log(drawStairs(3))
