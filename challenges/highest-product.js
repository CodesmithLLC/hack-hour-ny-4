/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    // console.log(array);
    let negArr = [];
    array = array.sort();
    let product1;
    let product2;

    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) negArr.push(array[i]);
    }

    negArr = negArr.map((num) => {
        return Math.abs(num);
    }).sort();
    console.log(array);
    console.log(negArr);

    if (negArr.length >=2) {
        product1 = negArr.pop();
        product2 = negArr.pop();
    } else {
        product1 = array.pop();
        product2 = array.pop();
    }
    // console.log(array);

    return product1 * product2;

}

console.log(highestProduct([-4, -3, -2]));
console.log(highestProduct([2, -6, 1]));
// console.log(highestProduct([2, 5, -3]));
// console.log(highestProduct([0, -1, 3]));

module.exports = highestProduct;
