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
// Mean
var numOfNums = array.length;
var meanResult = Math.floor(array.reduce(function(acc, curr) {
  return acc + curr;
}) / array.length);
//console.log('meanResult is: ', meanResult);

var sortedArr = array.sort((a,b) => b - a);
//console.log('sortedArr is: ', sortedArr)
var modeObj = {};
for (let i = 0; i < sortedArr.length; i++) {
  if (modeObj[sortedArr[i]]) {
      modeObj[sortedArr[i]]++;
  } else {
      modeObj[sortedArr[i]] = 1
  }
}
// Deleting non max freq
let freqValues = Object.values(modeObj)
let maxFreq = Math.max(...freqValues)

for (let numFreq in modeObj) {
  if (modeObj[numFreq] !== maxFreq) {
    delete modeObj[numFreq];
  } 
}

// console.log('modeObj is: ', modeObj)
let numValues = Object.keys(modeObj) 
let resultMode = Math.max(...numValues);
console.log(numValues)
console.log('resultMode is: ', resultMode);

console.log('modeObj is: ', modeObj)

return resultMode === meanResult;
}

console.log(modemean([1,1,2,2,3]));

module.exports = modemean;
