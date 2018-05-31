/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  const sorted = array.sort((a, b) => a - b);
  const greatestVal = sorted[sorted.length -1];
  var high = 0;
  for(var i = 0; i < sorted.length - 2; i++) {
    for(var j = 1; j < sorted.length - 1; j++) {
      if(i !== j) {
        temp = sorted[i] * sorted[j];
        if(high < temp) {
          high = temp;
        }
      }
    }
  }
  return high * greatestVal;
}
  


module.exports = highestProduct;
