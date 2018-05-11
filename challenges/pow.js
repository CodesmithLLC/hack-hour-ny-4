/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
  let total = base;
  for(let i = 0; i < power - 1; i++){
    total *= base;
  }
  return total;
}

function rePow(base, power){
  while(power){
    console.log(power)
    return base * rePow(base, power - 1);    
  }
  return base;
}

module.exports = pow;

console.log(rePow(5,3));