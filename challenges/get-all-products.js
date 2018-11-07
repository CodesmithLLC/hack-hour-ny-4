/* Accepts an array of integers and returns an array of all the possible products made by
 * multiplying all but one number. In other words, find all the products of multiplying any
 * array.length-1 numbers in the array.
 *
 * ex: getProducts([1, 7, 3, 4]); ->  [84, 12, 28, 21]
 * this is done via:
 * [7*3*4, 1*3*4, 1*7*4, 1*7*3]
 *
 * do not use division, becuase zero might be in the array and you cannot divide by zero
 */

function getAllProducts(array) {
  // helper func to make an array and push values inside. once length of array is the number of products return it
  // reduce to get sum 
  // recursive call func to slice it from front and slice from the back 
  // 
  if (!array.length) return; 
  for (let i = 0; i < array.length; i++) {
    let product = array.reduce((acc, curr) => (acc + curr));
    console.log('product: ', product);
    makeProductsArr(product);  
    if (array.length - 1 === sliced.length) {
      let sliced = array.slice(i).concat(array.slice(0, i - 1));
      console.log('sliced: ', sliced);
    }

    // console.log('array: ', array);
  }

}

function makeProductsArr(num, array) {
  let result = [];
  result.push(num);
  if (result.length === array) {
    return result;
  }
}

console.log(getAllProducts([1, 7, 3, 4]));

module.exports = getAllProducts;
