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


function modemean(array) {
  // find mean
  let mean = array.reduce(function(acc, curr) {
    return acc + curr;
  }) / array.length;
  mean = Math.floor(mean);

  // count each element in array
  let count = array.reduce(function(acc, curr) {
    if(acc[curr]) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});;

  let most = 2;
  let mode;
  for(let prop in count) {
    if(count[prop] >= most) {
      if(mode) {
        if(mode < prop) {
          most = count[prop];
          mode = Number(prop);
        }
      } else {
        most = count[prop];
        mode = Number(prop);
      }
    }
  }
  // console.log('mean: ',mean,' mode: ',mode);
  return mean === mode;
}

module.exports = modemean;
