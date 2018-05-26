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
  var star = '*', stairs = [];

  for (let i = 1; i <= n; i++) {
    stairs.push((' ').repeat(n-i));  
    stairs.push(star.repeat(i)); 
    if (i != n) stairs.push('\n'); 
  }//end for

  console.log(stairs.join('')); 
}


module.exports = drawStairs;
