/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  const sortedArr = array.sort((a, b) => {return(a - b)});
  const length = sortedArr.length; 

  const negatives = sortedArr[0] * sortedArr[1] * sortedArr[length-1]; 
  const lastThree = sortedArr[length-3] * sortedArr[length-2] * sortedArr[length-1]; 

  let highestProduct = Math.max(negatives, lastThree)

  return highestProduct; 
}

module.exports = highestProduct;