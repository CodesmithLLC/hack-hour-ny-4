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

}

module.exports = getAllProducts;

// function getAllProducts(array) {
//     if (!array || !array.length) return [0];
//     const front = [];
//     const back = [];
//     const result = [];

//     let productSoFar = 1;

//     //iterate through the input array forward
//     for (let i = 0; i < array.length; ++i) {
//         //start with 1 to exclude current value
//         front[i] = productSoFar;
//         //multiply the previous element in front array to previous  element in the input array
//         productSoFar *= array[i];
//     }

//     //do the same but backwards for the back array
//     productSoFar = 1;
//     for (let j = array.length - 1; j >= 0; --j) {
//         back[j] = productSoFar;
//         productSoFar *= array[j];
//     }

//     //multiply both arrays
//     for (let k = 0; k < array.length; k++) {
//         result[k] = front[k] * back[k];
//     }

//     return result;
// }