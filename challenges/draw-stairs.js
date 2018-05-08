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
    let spaces = '', asterisks = '';
    for(let i = 1; i <= n; i++) {
        for(let j = n-i; j > 0; j--) {
            spaces += ' ';
        }
        for(let k = 0; k < i; k++) {
            asterisks += '*';
        }
        console.log(spaces + asterisks);
        spaces = '';
        asterisks = '';
    }
}

function solution(n, stars = '') {
    if (n === 0) {
        console.log(stars);
    } else {
        console.log( ' '.repeat(n) + stars );
        solution(n-1, stars+'*');
    }
}


module.exports = drawStairs;
