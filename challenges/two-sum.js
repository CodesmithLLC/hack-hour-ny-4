/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  if (!arr) return undefined; 
  for (let i = 0; i < arr.length; i++) { 
  let difference = n - arr[i]; 
    if (arr.includes(difference) && difference !== arr[i]) return true; 
  }//end for
  return false; 
}

module.exports = twoSum;
