/*
How quickly could we check if a given integer is in the array?
Assume the array is sorted.
You can do better than O(n) time

var nums = [1, 4, 6, 7, 9, 17, 45]
findInOrderedSet(nums, 4);  -> true
findInOrderedSet(nums, 2);  -> false

 */

// O(n)
// function findInOrderedSet(arr, target) {
//   return arr.includes(target);
// }
// console.log(findInOrderedSet(nums, 4));

// const nums = [1, 4, 6, 7, 9, 17, 45];
function findInOrderedSet(arr, target) {
  const obj = new Set(arr);
  if (obj.has(target)) return true;
  return false;
}
// console.log(findInOrderedSet(nums, 2));

module.exports = findInOrderedSet;
