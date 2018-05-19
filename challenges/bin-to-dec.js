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
  let dec = 0;
  for(let i = 0; i < binary.length; i++) {
    let power = binary.length - 1 - i;
    if(binary[i] === 1) {
      dec += Math.pow(2, power);
    }
  }
  return dec;
}

function decToBin(decimal) {
  let result = '';
  return rec(decimal, result);
}

function rec(decimal, result) {
  if(decimal === '0') {
    return result+'0';
  }
  else if(decimal === '1') {
    return result+'10';
  }
  else {
    let temp = 1, i = 1;
    while(temp < decimal) {
      temp = Math.pow(2, ++i);
    }
    result += '1';
    let rest = Number(decimal) - Math.pow(2, i-1);
    rec(rest.toString(), result);
  }
}

module.exports = binToDec;
