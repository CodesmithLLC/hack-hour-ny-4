/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let maxPossibleMultiple = Math.floor(Math.min(a, b) / 2);
  while (maxPossibleMultiple > 0) {
    if ((a % maxPossibleMultiple) === 0 && (b % maxPossibleMultiple) === 0) return maxPossibleMultiple;
    maxPossibleMultiple--;
  };
}
console.log(gcd(10, 9));

module.exports = gcd;