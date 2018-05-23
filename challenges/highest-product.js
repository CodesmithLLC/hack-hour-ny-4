/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

// function highestProduct(array) {
//   array.sort((a, b) => {
//     return a-b;
//   });
//   let lastThirdIdx = array.length - 1 - 2;
//   let result=1;
//   for(let i = lastThirdIdx; i < array.length; i++) {
//     result *= array[i];
//   }
//   return result;
// }

function highestProduct(array) {
  return array.sort((a, b) => {
    return a-b;
  }).reduce((acc, curr, idx)=> {
    if(idx >= array.length - 1 - 2) { return acc *= curr; } 
    else { return acc; }
	}, 1);
}


module.exports = highestProduct;
