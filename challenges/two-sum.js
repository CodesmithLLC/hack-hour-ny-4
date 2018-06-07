/*  Given an array of numbers and a target number, return true if there are two numbers in the
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  // Really a permutation probelm but for simplicity sake will save with nested for loop
  // Might be able to reduce operations by sorting the array and using mathimatical logic
  return arr.some((elem, ind, orgArr) => {
    for (let i = ind + 1; i < orgArr.length; i += 1) {
      if (elem + orgArr[i] === n) return true;
    }
    return false;
  });
}

module.exports = twoSum;
