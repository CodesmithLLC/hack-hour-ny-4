/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {

    if (even(a) && even(b)) {
        
    }

}

function even(num) {
    return num % 2 === 0;
}

function leftGreater(num1, num2) {
    return num1 > num2;
}

console.log(even(10));
console.log(leftGreater(10, 8))

console.log(gcd(10, 8));
// console.log(gcd(9, 10));

module.exports = gcd;