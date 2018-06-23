/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
  const newRanges = [];
  let placedFlag;

  array.forEach((range) => {
    for (let i = 0; i < newRanges.length; i += 1) {
      placedFlag = false;
      // Can merge if start or end time is between/equal to either time
      if (range[0] >= newRanges[i][0] && range[0] <= newRanges[i][1]) {
        placedFlag = true;
        if (range[1] > newRanges[i][1]) newRanges[i][1] = range[1];
      } else if (range[1] >= newRanges[i][0] && range[1] <= newRanges[i][1]) {
        placedFlag = true;
        if (range[0] < newRanges[i][0]) newRanges[i][0] = range[0];
      } else if (range[0] <= newRanges[i][0] && range[1] >= newRanges[i][1]) {
        placedFlag = true;
        newRanges[i][0] = range[0];
        newRanges[i][1] = range[1];
      }
    }
    if (!placedFlag) {
      newRanges.push(range);
    }
  });

  return newRanges;
}

module.exports = mergeRanges;
