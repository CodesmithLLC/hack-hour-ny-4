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
    let total = 0;
    binArr = binary.split('').reverse();
   // console.log(binArr);
    for (let i = binArr.length - 1; i >= 0; i--){
        //console.log('total',total);
       // console.log(i);
        if (binArr[i] === '1'){
          total = total + Math.pow(2, i)
          //console.log('total',total);
        }
    }
    return total;
}

module.exports = binToDec;
//console.log(binToDec('0101'));