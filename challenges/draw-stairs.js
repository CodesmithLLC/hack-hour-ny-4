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

// function drawStairs(n) {
//   let stair = '';
//   for (var i = n; i >= 0; i--) {
   
//   }

//   // pattern = start at the bottom with n number of * , decrease as you go up 

// }

// solution 
function drawStairs(n, stars = '') {
    if (n === 0) 
        console.log(stars)
    else {
        console.log( ' '.repeat(n) + stars );
        drawStairs(n-1, stars+'*' );
    }
}
// staircase going right to left 
// function drawStairs(n) {
// 	let stair = '';
// 	while (n--) {
// 		stair += '*';
// 		console.log(stair);
// 	}
// }

drawStairs(10);

module.exports = drawStairs;
