/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
// O(n) time
function uniqueNumber(array) {
  return array.reduce((acc, curr, i) => {
    acc[curr] = (acc[curr] || 0) + 1;
    if (acc[curr] < 2) acc.once = curr;
    return acc;
  }, { once: null }).once;
}
// console.log(uniqueNumber([1, 2, 1, 3, 3, 3]));

module.exports = uniqueNumber;
