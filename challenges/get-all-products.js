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


const reducer = (accumulator, currentValue) => accumulator * currentValue;

function getAllProducts(array) {
  newArr = [];
  for (let i = 0; i < array.length; i++) {
    let temp = array[i];
    array.splice(i,1)
    newArr.push(array.reduce(reducer))
    array.splice(i,0,temp)
  }
  return newArr;
}

getAllProducts([1, 7, 3, 4]);

module.exports = getAllProducts;
