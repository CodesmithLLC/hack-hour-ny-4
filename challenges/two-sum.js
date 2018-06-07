/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  let difference = {};
  for (let i = 0; i < arr.length; i++) {
    if (difference[n - arr[i]]) return true;
    difference[arr[i]] = n - arr[i]
  }
  return false;

  // for (let i = 0; i < arr.length; i++) {
  //   return arr.includes(n - arr[i]);
  // }
}

console.log(twoSum([5, 2, 3, 10, 1], 15));

module.exports = twoSum;
