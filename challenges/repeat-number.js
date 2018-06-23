/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {
  let count = {};
  let idx;
  for(let i = 0; i < array.length; i++) {
    if(count[array[i]]) {
      count[array[i]]++;
      if(count[array[i]] === 2) idx = i;
    } else {
      count[array[i]] = 1;
    }
  }
  return array[idx];
}

module.exports = repeatNumbers;
