/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  // no sorting
  // want to return a num (sum of subset)
  
  // add everything up in the array using reduce
  let sum = arr.reduce((acc, curr) => acc + curr);
  console.log('sum: ', sum);

  let maxSum = 0;
  if (sum > maxSum) {
    maxSum = sum;
  }


  // slice the array to get rid of 1 num at a time from front 
  // add total 
  // slice from back
    // add total   
  
  // maxSubarray(arr.slice(0, arr.length - 2));
  maxSubarray(arr.slice(1, arr.length - 2));

  return maxSum;
}

console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));

module.exports = maxSubarray;
