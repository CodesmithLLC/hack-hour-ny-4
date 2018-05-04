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
    var x = 1;
    for (i = 0; i < n; i++){
      var nosteps = (' ').repeat(6 - x);
      var steps = ('*').repeat(x);
      console.log(nosteps + steps)
      x += 1;
    }
 }



module.exports = drawStairs;

//for (j = 0; j < n; j++)