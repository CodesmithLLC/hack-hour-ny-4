/*  Given an array of numbers and a target number, return true if there are two numbers in the 
 *  array that sum up to the target value; return false otherwise
 */

function twoSum(arr, n) {
  let result = n;
  
  if(arr.length === 1 && arr[0] != n){
    return false;
  }
  
  // Check for cases (addition, subtraction, multiplication, division)
  
  
  if(result === 0){
    return true;
  } else return false;
}

module.exports = twoSum;

let arr = [1, 4, 8, 18]

console.log(twoSum(arr, 10));