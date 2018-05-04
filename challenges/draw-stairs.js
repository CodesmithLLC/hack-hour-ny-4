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
  var counter = n;
  var final = [];
  for(var i = 0; i <= n; i++) {
    var arr = [];
    for(var j = 0; j <= n; j++) {
      if(j < counter) {
        arr[j] = ' '
      } else {
        arr[j] = '*'
      }
    }
    var str = arr.join('');
    final.push(str);
    counter--;
  }
  return final.join('\n')
}


module.exports = drawStairs;
