/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    // console.log(array);
    array = array.map((num) => {
        return Math.abs(num);
    }).sort();

    // console.log(array);
    let product1 = array.pop();
    // console.log(product1);
    let product2 = array.pop();
    // console.log(product2);
    // console.log(array);

    return product1 * product2;

}

// console.log(highestProduct([-4, -3, -2]));
// console.log(highestProduct([-6, 2, 1]));
// console.log(highestProduct([2, 5, -3]));
// console.log(highestProduct([0, -1, 3]));

module.exports = highestProduct;
