/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
 let start = 0
 let end = arr.length -1;
 let middle = Math.floor((start + end) / 2)

    while (arr[middle] !== target && start < end) {
     if (target < arr[middle]) {
      (end) = middle - 1
     } else {
      start = middle + 1
    }

     middle = Math.floor((start + end) / 2)
    }

    if (arr[middle] !== target){
        return false;
    }
       return true;
}

// var nums = [1, 4, 6, 7, 9, 17, 45]
// console.log(findInOrderedSet(nums, 4));  
// console.log(findInOrderedSet(nums, 2));
// console.log(findInOrderedSet(nums, 17));
// console.log(findInOrderedSet(nums, 8));


module.exports = findInOrderedSet;

