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

// function mergeArrays(arr1, arr2) {
//     let joined = arr1.concat(arr2);
//     return joined.sort(((a,b) => (a-b)));
// }

function mergeArrays(arr1, arr2) {
    const joined = arr1.concat(arr2);
    const firstHalf = joined.slice(0, Math.floor(joined.length / 2));
    mergeArrays(firstHalf);
    const secondHalf = joined.slice(Math.floor(joined.length / 2));
    mergeArrays(secondHalf);
    console.log('first half: ', firstHalf);
    console.log('second half: ', secondHalf);
}

console.log(mergeArrays([3,4,6,10,11,15,21], [1,5,8,12,14,19]));
module.exports = mergeArrays;
