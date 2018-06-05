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
  let stack = [];
  let split = str.split('');
  for(let i = 0; i < split.length; i += 1) {
    if(stack.includes(split[i])) {
      stack.splice(stack.indexOf(split[i]), 1);
    } else stack.push(split[i]);
  }
  console.log(stack)
  if(stack.length <= 1) return true; 
  else return false;
}

module.exports = permPalin;

console.log(permPalin('ababac')); // true
console.log(permPalin('cbac')); // false
console.log(permPalin('a')); // true
// console.log(permPalin('cbaba')); // true
