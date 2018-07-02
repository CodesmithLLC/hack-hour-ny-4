/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */


function findInOrderedSet(arr, target) {
  let ind = Math.floor(arr.length / 2);
  let prevMaxInd = arr.length - 1;
  let prevMinInd = 0;

  while (true) {
    if (target === arr[ind]) return true;

    if (ind === prevMaxInd || ind === prevMinInd) return false;

    else if (target < arr[ind]) {
      if (ind === 0) return false;
      prevMaxInd = ind;
      ind = Math.floor((ind + prevMinInd) / 2);
    } else if (target > arr[ind]) {
      if (ind === arr.length - 1) return false;
      prevMinInd = ind;
      ind = Math.ceil((ind + prevMaxInd) / 2);
    }
  }
}


module.exports = findInOrderedSet;
