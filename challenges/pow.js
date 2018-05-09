/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow (base, power) {

  if (power < 0) {
    Math.abs(power);
    return 1 / mainPow (base, power);
    
  } else return mainPow (base, power); 
  
}

function mainPow (base, power) {
  if (power === 0) return 1;
  if (power === 1) return base * power;
  else return base * pow(base, power-1);
}

module.exports = pow;
