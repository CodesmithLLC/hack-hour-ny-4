/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let divisor = Math.max(a, b);
  while(divisor > 1) {
    if( a % divisor === 0 && b % divisor === 0) return divisor;
    divisor--;
  }
  if(divisor < 0) divisor = 1;
  return divisor;
}

module.exports = gcd;