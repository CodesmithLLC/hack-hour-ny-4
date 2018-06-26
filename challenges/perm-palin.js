/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true // baab
 * 	- permPalin('cbaba') => true // bacab
 * 	- permPalin('cbac') => false // c a b c
 * 	- permPalin('a') => true //
 *
 */

function permPalin(str) {
  // if (str.length === 1) return true;
  str = str.split('').sort();
  console.log(str);

  const objStr = str.reduce((acc, curr) => {
    acc[curr] = ++acc[curr] || 1;
    return acc;
  }, {});

  const objValues = Object.values(objStr);
  console.log(objValues);
  console.log(objStr);


  // let copyStr = str.slice().reverse();
  // console.log(objStr);
}

function recursiveLeft(arr1, arr2) {

}

console.log(permPalin('abab'));
// console.log(permPalin('cbaba'));
// console.log(permPalin('cbac'));

module.exports = permPalin;
