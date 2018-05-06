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

// const test = [1, 15, 15, 16, 21, 21];
function modemean(array) {
  const mean = Math.floor(array.reduce((sum, val) => sum + val) / array.length);
  const modeCounter = array.reduce((modeHash, freq) => {
    if (freq in modeHash) modeHash[freq]++;
    else modeHash[freq] = 1;
    return modeHash;
  }, {});
  const highestCount = Math.max(...Object.values(modeCounter));
  const highestFreq = [];
  for (const count in modeCounter) {
    if (modeCounter[count] === highestCount) highestFreq.push(count);
  }
  return Math.floor(mean) === Math.max(...highestFreq);
}
// console.log(modemean(test));

module.exports = modemean;
