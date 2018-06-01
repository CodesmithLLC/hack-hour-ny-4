/**
 * We have our lists of orders sorted numerically already, in arrays.
 * Write a functin to merge our arrays of orders into one sorted array.
 * These may be of different lengths.
 *
 * var my_array = [3,4,6,10,11,15,21];
 * var another_array = [1,5,8,12,14,19];
 *
 * mergeArrays(my_array, another_array); -> [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19, 21]
 * 
 * BONUS: 
 * Complete in O(n) time  
 *
 */

function mergeArrays(arr1, arr2) {
  let arr1Index = 0;
  let arr2Index = 0;
  const mergeArr = [];

  while (arr1Index < arr1.length || arr2Index < arr2.length) {
    if (arr1Index >= arr1.length) {
      mergeArr.push(arr2[arr2Index]);
      arr2Index += 1;
    } else if (arr2Index >= arr2.length) {
      mergeArr.push(arr1[arr1Index]);
      arr1Index += 1;
    } else if (arr1[arr1Index] < arr2[arr2Index]) {
      mergeArr.push(arr1[arr1Index]);
      arr1Index += 1;
    } else {
      mergeArr.push(arr2[arr2Index]);
      arr2Index += 1;
    }
  }

  return mergeArr;
}

module.exports = mergeArrays;
