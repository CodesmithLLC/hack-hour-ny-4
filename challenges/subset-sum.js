/* You are given an array of integers and a target number. Write a function that returns true if
 * there is a subset of the array that sums up to the target and returns false otherwise. A subset
 * can be any size and the elements do not have to appear consecutively in the array.
 * 
 * subsetSum([3, 7, 4, 2], 5) - > true, 3 + 2 = 5
 * subsetSum([3, 34, 4, 12, 5, 12], 32) -> true, 3 + 12 + 5 + 12 = 32
 * subsetSum([8, 2, 4, 12], 13) -> false
 * subsetSum([8, -2, 1, -3], 6) -> true, 8 + 1 + (-3) = 6
 */

function subsetSum(array, target) {


//
function subsetSumPerm(array, target) {
    // edge case if array length is 1
    if (array.length === 1) return array[0] === target;
    // create storage for sums
    const storage = {};
    // recursive helper function
    const recur = (arr) => {
      // get sum of current array and put it in storage
      const sum = arr.reduce((a, b) => a + b);
      storage[sum] = true;
      // if array length is 2, we can go ahead and add those numbers to the storage
      if (arr.length === 2) arr.forEach((num) => { storage[num] = true });
      // for longer arrays, call recursive func on permutations of array
      else if (arr.length > 2) {
        arr.forEach((num, idx) => {
          recur(arr.slice(0, idx).concat(arr.slice(idx + 1)));
        });
      }
    }
    // call recursive func
    recur(array);
    // return true if target is in storage, false if not
    return target in storage;
  }
  
  
//   // MOAR ELEGANT
//   function subsetSum(array, target) {
//     console.log('short making a call');
//     if (!target) return true;
//     if (!array.length) return false;
    
//     // Using the OR boolean operator will short circuit the second expression
//     // if the first expression returns true
//     return subsetSum(array.slice(1), target - array[0]) || subsetSum(array.slice(1), target);
//   }
// //

//     for (let i = 0; i <= array.length + 1; i++){
//         var current = array[i];
//         for (let j = 1; j <= array.length; j++){
//             var toCompare = array[j];
//             console.log('Curr',current);
//             console.log('compare',toCompare)
//             if (current + array[j] === target){
//                 return true;
//             }
               
//         }

//     }
//     return false;
// }
}

module.exports = subsetSum;

console.log(subsetSum([3, 7, 4, 2], 5))
