/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
    if (a > b){
        for (let i = a; i > 0; i--){
            if ((a % i == 0) && (b % i == 0)){
                //console.log(i);
                return i;
            }

        }
    }
    else if (b > a){
        for (let j = b; j > 0; j--){
            if ((b % j == 0) && (a % j == 0)){
                return j;
            }

        }
    }
}

module.exports = gcd;

//console.log(gcd(10, 9));