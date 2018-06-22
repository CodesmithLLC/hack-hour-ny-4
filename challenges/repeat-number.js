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

const arr = [1, 3, 5, 6, 7, 9, 9, 10, 11];
function repeatNumbers(array) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) return arr[i];
  }
  return -1;
}
// console.log(repeatNumbers(arr));

module.exports = repeatNumbers;
