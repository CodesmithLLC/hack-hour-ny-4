/**
 * Write a function mergeRanges that takes an array of meeting time ranges
 * and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */

function mergeRanges(array) {
  const arr = array.sort((a, b) => parseInt(a, 10) - parseInt(b, 10));
  let i = 0;
  while (i < arr.length) {
    if (arr[i + 1][0] <= arr[i][1] && arr[i + 1][1] > arr[i][1]) {
      [arr[i][0], arr[i][1]] = [arr[i][0], arr[i + 1][1]];
      arr.splice(i + 1, 1);
    }
    i++;
  }
  return arr;
}

module.exports = mergeRanges;
