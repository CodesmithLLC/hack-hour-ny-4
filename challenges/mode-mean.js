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
  let highestFreq = 0; 
  let numMap = {};
  let modes = [];

  array.forEach(function(num) {
    numMap[num] = (numMap[num] || 0) + 1;
    if (highestFreq <= numMap[num]) {
      highestFreq = numMap[num];
      modes.push(num);
    }
  })
  let greatestMode = Math.max(...modes);
  console.log(greatestMode);
  
  let total = array.reduce(function(avg, item) {
    return (avg + item);
  });
  
  let mean = Math.floor(total/array.length);
  console.log(mean);
  return (mean === greatestMode);
}

module.exports = modemean;
