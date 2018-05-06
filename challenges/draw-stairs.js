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

// outside loop = row
// inside loop = columns
function drawStairs(n) {
var string = '';
var space = ' ';
var stars = '*';
    for (let i = 1; i <= n; i++) {
        string += '\n' + space.repeat(n-i) + stars.repeat(i);
    }
return string;
}

console.log(drawStairs(6));

module.exports = drawStairs;
