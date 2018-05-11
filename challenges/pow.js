/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {

  // base case
  if (power === 0) { return 1; }
  if (power === 1) { return base; }

  // recursive case

  // negative
  if (power < 0) {
  	return pow(base, power + 1) * (1 / base);
  }


  // positive only 
  return pow(base, power - 1) * base;


  // return Math.pow(base, power);
}

module.exports = pow;

// 2 0 = 1 
// 2 1 = 2 
// 2 2 = 4
// 2 3 = 8
// 2 4 = 16 

// 2 -1 = 1/2
// 2 -2 = 1/4
// 2 -3 = 1/8 
// 2 -4 = 1/16