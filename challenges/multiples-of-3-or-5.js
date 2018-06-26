'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;
  // multiples of 3 below 1000 add to sum
  for(let i = 1, j = 3; j < 1000; i++, j = i * 3) {
    sum += j;
  }
  // multiples of 5 below 1000 add to sum
  for(let i = 1, j = 5; j < 1000; i++, j = i * 5) {
    sum += j;
  }
  return sum;
}


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;
  // multiples of x below z add to sum
  for(let i = 1, j = x; j < z; i++, j = i * x) {
    sum += j;
  }
  // multiples of y below z add to sum
  for(let i = 1, j = y; j < z; i++, j = i * y) {
    sum += j;
  }
  return sum;
}



const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
