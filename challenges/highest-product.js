/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  let newArr = [];
  // let negArr = [];
  
  for(let i = 0; i < array.length; i += 1){
    
    let val = Math.min.apply(null, newArr);
    let min = newArr.findIndex((min) => min === val);
    
    if(newArr.length < 3){
      newArr.push(array[i]);
    // } else {
    //   if (array[i] < 0){
    //     negArr.push(array[i]);
      if (array[i] > newArr[min]){
        newArr.splice(min, 1);
        newArr.push(array[i]);
      }
    }
  }
  return newArr.reduce((x, i) => x *= i);
}


module.exports = highestProduct;

console.log(highestProduct([5, 9, 4, 3, -24, 0, 8, 9, -20]));
console.log(highestProduct([-50, -50, 1, 2, 3]));