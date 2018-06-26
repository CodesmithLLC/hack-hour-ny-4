'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
function sum1ToN(n) {
  return (n * (n + 1)) / 2;
}

function sumMultiples3Or5Below1000() {
  let sum = 0;
  const lcmNum = lcm(3, 5);

  sum += 3 * sum1ToN(Math.floor((1000 - 1) / 3));
  sum += 5 * sum1ToN(Math.floor((1000 - 1) / 5));
  sum -= lcmNum * sum1ToN(Math.floor((1000 - 1) / lcmNum));

  return sum;
}


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;
  const lcmNum = lcm(x, y);

  sum += x * sum1ToN(Math.floor((z - 1) / x));
  sum += y * sum1ToN(Math.floor((z - 1) / y));
  sum -= lcmNum * sum1ToN(Math.floor((z - 1) / lcmNum));

  return sum;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
