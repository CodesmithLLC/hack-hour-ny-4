'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000(num1, num2) {
  let sum = 0;
  
  for (let i = 1; i <= num2; i++) {
    if (i % num1 === 0) {
      sum += i
    }
  }
  return sum;
}

//console.log(9 % 3 === 0);

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;
  let sum1 = sumMultiples3Or5Below1000(x, z);
  let sum2 = sumMultiples3Or5Below1000(y, z);
  sum = sum1 + sum2;

  // console.log('sum1 is : ', sum1);
  // console.log('sum2 is : ', sum2);
  return sum;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;

//console.log((sumMultiplesXOrYBelowZ(3, 5, 500)))
