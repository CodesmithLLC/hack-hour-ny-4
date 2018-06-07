/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  let missing = arr.reduce((acc, element) => {
    return n - element;
  }, 0);
  return arr.includes(missing);
}

// console.log(twoSum([1, 2, 10, 4, 5], 15));

module.exports = twoSum;
