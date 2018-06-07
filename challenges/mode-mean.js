/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */

// const modeCounter = array.reduce((modeHash, freq) => {
//   modeHash[freq] = (modeHash[freq] || 0) + 1;
//   return modeHash;
// }, {});
// console.log(modeHash);

// const modeMax = function mode(arr) {
//   return arr.reduce(
//     (current, item) => {
//       current.numMapping[item] = (current.numMapping[item] || 0) + 1;
//       const val = current.numMapping[item];
//       if (val >= current.greatestFreq && item >= current.mode) {
//         current.greatestFreq = val;
//         current.mode = item;
//       }
//       return current;
//     },
//     { mode: null, greatestFreq: 0, numMapping: {} }
//   ).mode;
// };

// const test = [1, 14, 14, 16, 21, 21];
// const test = [1, 1, 1, 2, 2, 2];

function modemean(array) {
  const mean = Math.floor(array.reduce((sum, val) => sum + val) / array.length);
  const modeCounter = {};
  for (const num of array) modeCounter[num] = (modeCounter[num] || 0) + 1;
  const highestCount = Math.max(...Object.values(modeCounter));
  const highestFreq = [];
  for (const count in modeCounter)
    if (modeCounter[count] === highestCount) highestFreq.push(count);
  return mean === Math.max(...highestFreq);
  // return mean === modeMax(array);
}
// console.log(modemean(test));
module.exports = modemean;
