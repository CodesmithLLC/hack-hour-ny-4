/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {

    if (array.length < 3) return 0;
    if (!Array.isArray(array)) return 0;

    array.sort((a,b) => a - b );

    //console.log(array);

    let len = array.length;

    product = Math.max(
        array[0] * array[1] * array[len -1],
        array[len-1] * array[len-2] * array[len-3]
    )
    return product;

}

//console.log(highestProduct([-3,2,6,-4,1,5]))


module.exports = highestProduct;
