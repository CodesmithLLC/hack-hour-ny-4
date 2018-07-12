/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {

}

// console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));
// console.log(maxSubarray([15, 20, -5, 10]));

// // Brute force with 3 loops
// function maxSubarray(arr) {
//   let maxSum = -Infinity;
//   let sum;

//   // Check all possible sub-arrays
//   for (let left = 0; left < arr.length; left += 1) {
//     for (let right = left; right < arr.length; right += 1) {
//       // Sum sub-array and replace max if the sum is greater than the current max
//       sum = arr.slice(left, right + 1).reduce((acc, cur) => acc + cur);
//       if (sum > maxSum) maxSum = sum;
//     }
//   }
//   return maxSum;
// }


// // Use temporary storage to avoid recalculating sums
// function maxSubarray(arr) {
//   let maxNum = -Infinity;

//   for (let i = 0; i < arr.length; i += 1) {
//     let tmpSum = 0;
//     for (let j = i; j < arr.length; j += 1) {
//       tmpSum += arr[j];
//       if (tmpSum > maxNum) maxNum = tmpSum;
//     }
//   }
//   return maxNum;
// }

// // Binary splitting approach WARNING: this was done quickly and probably has a bug.
// function maxSubarray(arr) {
//   if (arr.length === 1) return arr[0];

//   const midPoint = Math.floor((arr.length)/2);
//   const leftMSS = maxSubarray(arr.slice(0,midPoint));
//   const rightMSS = maxSubarray(arr.slice(midPoint));
//   // Check if the left or right partition has a larger sub array
//   const maxSub = Math.max(leftMSS, rightMSS);
  
//   // Calculate a maximum subarray sum for the cross-over region between the partitions
//   let tmpSum = 0;
//   let leftSum = -Infinity;
//   let rightSum = -Infinity;
//   for (let i = midPoint; i< arr.length; i += 1) {
//     tmpSum += arr[i];
//     rightSum = Math.max(rightSum, tmpSum);
//   }
//   tmpSum = 0;
//   for (let i = midPoint - 1; i >= 0; i -= 1) {
//     tmpSum += arr[i];
//     leftSum = Math.max(leftSum, tmpSum);
//   }
  
//   // Check if left or right partion is great than the cross-over partition
//   return Math.max(maxSub, leftSum + rightSum);
// }

// // Single loop using dynamic programming
// function maxSubarray(arr) {

//   var currentMax = -Infinity;
//   var finalMax = -Infinity;

//   for (var i = 0; i < arr.length; i += 1) {
//     // which is greater: arr[i] or the sum of a subarray
//     // ending in arr[i]? 
//     currentMax = Math.max(arr[i], currentMax + arr[i]);

//     // which is greater: currentMax or the previous max?
//     finalMax = Math.max(finalMax, currentMax);
//   }
//   return finalMax;
// }

module.exports = maxSubarray;
