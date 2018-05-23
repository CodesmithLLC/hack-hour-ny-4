/* eslint-disable */
/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
	let curHighest = array[0] * array[1] * array[2];

	for (let ind1 = 0; ind1 < array.length; ind1 += 1){
    	for (let ind2 = ind1 + 1; ind2 < array.length; ind2 += 1){
      		for (let ind3 = ind2 + 1; ind3 < array.length; ind3 += 1){
        		let newProduct = array[ind1] * array[ind2] * array[ind3];
        		if (newProduct > curHighest) curHighest = newProduct;
      		}
    	}
  	}
  	
  	return curHighest;
}


module.exports = highestProduct;
