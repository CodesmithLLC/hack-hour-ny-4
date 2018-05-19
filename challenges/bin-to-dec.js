/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
  let counter = 1;
  let sum = 0;
  binary = binary.split('');
  for(let i = binary.length -1; i >= 0; i--){
    if(binary[i] === '1'){
      sum += counter;
    }
    counter = counter * 2;  
  }
  return sum;
}

module.exports = binToDec;

// console.log(binToDec('101')); // 5
// console.log(binToDec('0')); // 0
// console.log(binToDec('01010101')); // 85
