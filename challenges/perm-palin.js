/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
  let count = {};
  for(let i = 0; i < str.length; i++) {
    count[str[i]] ? delete count[str[i]] : count[str[i]] = 1;
  }
  return Object.keys(count).length <= 1;
}

// function perm(str) {
//   let result = [];
//   permRec(result, str, 0, str.length-1);
//   return result;
// }
// function permRec(result, str, start, end) {
//   if(start === end) {
//     return result.push(str);
//   } else {
//     for(let i = start; i < end; i++) {
//       // swap index start and index i
//       let newStr = str.substring(0,start) + str[i] + str.substring(start+1,i) + str[start] + str.substring(i+1, str.length);
//       permRec(result, newStr, start+1, end);
//     }
//   }
// }

// function palin(str) {

// }

module.exports = permPalin;