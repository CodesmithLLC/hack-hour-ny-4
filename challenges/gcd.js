/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

// Iterative
function gcd(a, b) {
  let maxPossibleMultiple = Math.min(a, b);
  console.log(maxPossibleMultiple);
  while (maxPossibleMultiple > 0) {
    if (a % maxPossibleMultiple === 0 && b % maxPossibleMultiple === 0) return maxPossibleMultiple;
    maxPossibleMultiple--;
  }
  return maxPossibleMultiple;
}
// console.log(gcd(24, 6));

// Recursive Solution
// function gcd(a, b) {
//   if (!b) return a;
//   return gcd(b, a % b);
// }
// console.log(gcd(10, 5));

module.exports = gcd;
