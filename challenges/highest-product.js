/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
    let sortedArr = []; 
    for (let i = 0; i < array.length; i++) { 
      sortedArr.push(Math.abs(array[i])); 
    }//end for
    sortedArr.sort(function(a , b) { 
      return a - b; 
    }); 
    return sortedArr[sortedArr.length-1] * sortedArr[sortedArr.length-2] * sortedArr[sortedArr.length-3];
}


module.exports = highestProduct;
