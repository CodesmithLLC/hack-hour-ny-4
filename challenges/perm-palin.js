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
    let counter = 0;
    console.log('initial str: ', str);
    // if str is 2 of the same letters or only 1 letter, return true (base case)
    if ((counter === 0 && str.length === 1) || ((counter === 0) && (str.length === 2) && (str[0] === str[1]))) return true;
    if (counter > 0 && str.length === 2) return false;
    // if str is more than 2 letters
    console.log('after base case: ', str);
    if (str.length > 2) {
      // slice the first two letters 
      let pairToCheck = str.slice(0, 2);
      console.log('pair to check: ', pairToCheck);
      let remainingLetters = str.slice(2);
      console.log('remaining letters: ', remainingLetters);
    //   console.log(pairToCheck.indexOf(remainingLetters) >= 0);
      // check if 1st slice is present in str.slice(2), if yes return true
      if (pairToCheck.indexOf(remainingLetters) >= 0) {
          return true;
      } else {
          counter ++;
          // call recursively on str.slice(1)
          permPalin(str.slice(1));
      }
    } 
}

console.log(permPalin('cbaba'));

module.exports = permPalin;