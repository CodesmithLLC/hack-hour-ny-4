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
  let countSub = recursion(array, target, array.length - 1);
	if(countSub > 0) {
    return true;
  } 
	return false;
}
function recursion(array, total, idx) {
	console.log('total: ',total,', array[',idx,']: ',array[idx]);;
  if(total === 0) {
		return 1;
	} else if(total < 0) {
		return 0;
	} else if( idx < 0) {
		return 0;
	} else if(total < array[idx]) {
		return recursion(array, total, idx-1);
	} else {
		return recursion(array, total - array[idx], idx-1) + recursion(array, total, idx-1);
	}
}

module.exports = subsetSum;
