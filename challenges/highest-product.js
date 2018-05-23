/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  let secondMax = 0;
  for (let j = 0; j < array.length; j++) {
    if (array[j] > secondMax && array[j] < max) {
      secondMax = array[j];
    }
  }
  let thirdMax = 0;
  for (let k = 0; k < array.length; k++) {
    if (array[k] > thirdMax && array[k] < secondMax) {
      thirdMax = array[k];
    }
  }
  return max * secondMax * thirdMax;
}


module.exports = highestProduct;

console.log(highestProduct([3, 4, 5, 6, 7, 8]));
