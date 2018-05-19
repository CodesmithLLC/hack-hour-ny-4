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
    const binaryArr = binary.split(''); 
    let endIndex = binaryArr.length-1; 
    let binaryDigit = 0;
    let increasePower = 0;
  
    while (endIndex > -1) {  
      if (binaryArr[endIndex] === '1') {  
        binaryDigit += Math.pow(2, increasePower);  
      } else { 
        binaryDigit += 0; 
      }//end if else
      increasePower += 1;
      endIndex--; 
    }//end while
  
    return binaryDigit; 
}

module.exports = binToDec;
