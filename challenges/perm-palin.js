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
  const strCache = {}; 
  for (let i = 0; i < str.length; i++) { 
    if (strCache[str[i]]) strCache[str[i]]++; 
    else strCache[str[i]] = 1; 
  }//end for
    
  let numOddValues = 0; 
  for (let char in strCache) { 
    if (strCache[char] % 2 !== 0) numOddValues++;  
  }//end for
  
  return numOddValues < 2;  
}

module.exports = permPalin;