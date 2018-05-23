/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */
function highestProduct(array) {
  if (array.length === 0) {
    return 0;
  } else if (!(Array.isArray(array))){
    return 0;
  } else if (array.length <=3) {
    let product1 = 1;
    array.forEach( (num) => {
      product1 = product1 * num;
    })
    return product1;
  
  } else {
    let positiveArr = array.map((num) => Math.abs(num));
    let sortedArr = positiveArr.sort((a,b) => a - b);
    let product2 = 1;
    for (let i = sortedArr.length-1; i >= sortedArr.length - 3; i--) {
      product2 *= sortedArr[i];
    }
    return product2;
  }
}

module.exports = highestProduct;
