/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, pow, result = 1){
  if(pow === 0) return result;
  result *= base;
  pow--;
  return pow(base, pow, result);
}

module.exports = pow;
