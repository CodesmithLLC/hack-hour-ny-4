/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  let filteredArr = arr.filter(num => num <= n);
  let noMatches = false;
  for (let i = 0; i < filteredArr.length - 1; i++) {
    for (let j = i+1; j < filteredArr.length; j++) {
      if (filteredArr[i] + filteredArr[j] === n ) return true;
    }
  }
  return noMatches;
}

module.exports = twoSum;
