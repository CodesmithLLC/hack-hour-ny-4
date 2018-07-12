/**
 * I have an array where every number in the range 1...n appears once except for 
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

function repeatNumbers(array) {

}

module.exports = repeatNumbers;

// // O(n) time, O(1) space
// function repeatNumbers(array) {
//     //calculate the expected sum of the numbers 1 through n
//     const expected = ( ( array.length - 1 ) * array.length ) / 2;
//   //initialize actual sum to 0
//   let sum = 0;
  
//   //iterate over array to add to actual sum
//   for (let i = 0; i < array.length; i++) {
//       sum += array[i];
//   }
//   //return actual minus expected
//   return sum - expected;
// }

// // O(n) time, O(1) space
// function repeatNumbers(array) {
//     //initialize result sum to 0
//   let result = 0;
//   //iterate over the array using bitwise operater to calculate result
//   for (let i = 0; i < array.length; i++) {
//       result = result ^ i ^ array[i];
//   }
  
//   //return result
//   return result;
// }
