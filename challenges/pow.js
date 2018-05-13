/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

// function pow(base, power) {
//   let total = base;
//   for(let i = 0; i < power - 1; i++){
//     total *= base;
//   }
//   return total;
// }

function pow(base, power){
  if(power === 0) return 1
  return base * pow(base, power - 1);    
}

module.exports = pow;

// console.log(pow(5,4));