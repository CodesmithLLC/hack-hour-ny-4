/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  let divisors; 
  if (a > b) divisors = a; 
  else divisors = b; 
  
  while (divisors > 0) {  
    if (a % divisors === 0 && b % divisors === 0) return divisors; 
    divisors--; 
  }//end while 
}

module.exports = gcd;