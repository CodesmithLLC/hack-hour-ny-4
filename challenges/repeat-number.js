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

const arr = [1, 5, 3, 7, 6, 9, 11, 12, 10, 9];
function repeatNumbers(array) {
  const sortedArr = arr.sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length; i++) {
    const diff = arr[i] - arr[i + 1];
    if (diff === 0) return arr[i];
  }
  return -1;
}
console.log(repeatNumbers(arr));

module.exports = repeatNumbers;
