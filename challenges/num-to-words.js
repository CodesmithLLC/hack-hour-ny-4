// Write a function that takes a number as an argument and returns its english word representation as a string. Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
// Include support for 11-19 ('Eleven', 'Twelve', 'Thirteen', ... 'Nineteen').


/**
 * numToWords(0) -> 'Zero'
 * numToWords(43) -> 'FortyThree'
 * numToWords(2999) -> 'TwoThousandNineHundredNintyNine'
 * numToWords(15) -> 'Fifteen'
 * numToWords(2483579411) -> 'TwoBillionFourHundredEightyThreeMillionFiveHundredSeventyNineThousandFourHundredEleven'
 * numToWords(300525151340440) -> 'ThreeHundredTrillionFiveHundredTwentyFiveBillionOneHundredFiftyOneMillionThreeHundredFortyThousandFourHundredForty'
 * numToWords(92120000000000000) -> 'NintyTwoQuadrillionOneHundredTwentyTrillion'
 */

function numToWords(num) {

}

module.exports = numToWords;

// function numToWords(num) {
//     // edge case for 0
//     if (num === 0) return 'Zero';
//     // create dictionary array of numbers below 100
//     const dict = [
//       { num: 90, str: 'Ninety' },
//       { num: 80, str: 'Eighty' },
//       { num: 70, str: 'Seventy' },
//       { num: 60, str: 'Sixty' },
//       { num: 50, str: 'Fifty' },
//       { num: 40, str: 'Forty' },
//       { num: 30, str: 'Thirty' },
//       { num: 20, str: 'Twenty' },
//       { num: 19, str: 'Nineteen' },
//       { num: 18, str: 'Eighteen' },
//       { num: 17, str: 'Seventeen' },
//       { num: 16, str: 'Sixteen' },
//       { num: 15, str: 'Fifteen' },
//       { num: 14, str: 'Fourteen' },
//       { num: 13, str: 'Thirteen' },
//       { num: 12, str: 'Twelve' },
//       { num: 11, str: 'Eleven' },
//       { num: 10, str: 'Ten' },
//       { num: 9, str: 'Nine' },
//       { num: 8, str: 'Eight' },
//       { num: 7, str: 'Seven' },
//       { num: 6, str: 'Six' },
//       { num: 5, str: 'Five' },
//       { num: 4, str: 'Four' },
//       { num: 3, str: 'Three' },
//       { num: 2, str: 'Two' },
//       { num: 1, str: 'One' },
//     ]
//     // places array for every third power of ten
//     const places = ['', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion'];
//     // get string of input
//     let str = String(num);
//     // add leading zeroes to string in order to get places divisible by 3
//     while (str.length % 3 !== 0) {
//       str = '0' + str;
//     }
//     // turn string into array of every three digits of input number
//     const arr = str.split('').reduce((acc, val, idx) => {
//       if (idx % 3 === 0) acc.push(val);
//       else acc[acc.length - 1] += val;
//       return acc;
//     }, []).reverse().map(elem => Number(elem));
//     // initialize output string
//     let output = '';
//     // loop through array
//     arr.forEach((num, idx) => {
//       // create local string of words to concat to
//       let localStr = '';
//       // deal with hundreds, subtracting from num as we go
//       if (num >= 100) {
//         let hundreds = Math.floor(num / 100);
//         num -= 100 * hundreds;
//         localStr += dict.filter((elem) => elem.num === hundreds)[0].str + 'Hundred';
//       }
//       // go through dict and subtract nums
//       while (num) {
//         dict.forEach((elem) => {
//           if (num >= elem.num) {
//             num -= elem.num;
//             localStr += elem.str;
//           }
//         });
//       }
//       // add local string to output, undoing reverse of array
//       output = localStr + places[idx] + output;
//     });
//       // return output
//     return output;
//   }
