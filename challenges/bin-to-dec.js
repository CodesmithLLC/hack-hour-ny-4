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
    binary = binary.toString();
    let arrBin = binary.split(' ');
    console.log(arrBin)
    let exponent = arrBin.length -1;
    let evaluate = Math.pow(2, exponent);

    console.log('first eval : ', evaluate);

    if (exponent === 0) return evaluate;
    else {
        arrBin.splice(0, 1)
        arrBin.join('');
        return binToDec(arrBin);
    }

}

// function convertToBinary(number, binaryNum) {
//     number = parseInt(number);
//     console.log('number is : ', number);
//     // binaryNum = [];

//     if (number / 2 === 0) {
//         return binaryNum;
//         // return Number(binaryNum);
//     } else {
//         let remainder = number % 2;
//         binaryNum.push(remainder);
//         let newNum = ((Number(number)) / 2);
//         // console.log('quotient is: ', remainder);
//         console.log('binary conversion: ',remainder);
//         console.log('each new number : ',newNum);
//         return convertToBinary(Number(newNum), binaryNum);
//     }
// }

module.exports = binToDec;

console.log([0].length);

// console.log(binToDec('0'));
console.log(binToDec('11'));
// console.log(binToDec('100'))
// console.log(binToDec('101'))
// console.log(binToDec('0101'))

// console.log(convertToBinary('0'))
//console.log(convertToBinary('11')); //1011
// console.log(convertToBinary('100'))
// console.log(convertToBinary('101'))
// console.log(convertToBinary('0101'))
