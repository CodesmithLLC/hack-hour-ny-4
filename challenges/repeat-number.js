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
  const mem = {};
  const arrLen = array.length;
  let val;

  for (let i = 0; i < arrLen; i += 1) {
    val = array.pop();
    if (mem[val] === undefined) mem[val] = true;
    else return val;
  }
  return undefined;
}

module.exports = repeatNumbers;
