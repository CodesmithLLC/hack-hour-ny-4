/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  let right = arr.length - 1;
  let left = 0;
  let mid;
  while(left <= right) {
    mid = Math.floor((left + right)/2);
    if(arr[mid] === target) {
      return true;
    } else if(arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
}



module.exports = findInOrderedSet;
