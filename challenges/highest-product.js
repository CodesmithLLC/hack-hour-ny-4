/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

// let arr = [5, 4, 4, 5, 6, 7, 8, 10, -10, -10, -10];
function highestProduct(array) {
    arr = arr.sort((a, b) => a - b);
    // console.log(arr);
    if (arr.length < 3 || !Array.isArray(arr)) return 0;
    let prodLast3 = arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3];
    let prodFirst2Last = arr[0] * arr[1] * arr[arr.length - 1];
    return Math.max(prodFirst2Last, prodLast3);
}
// console.log(highestProduct(arr));


module.exports = highestProduct;
