/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 *      4     ->    IV
 *      5     ->    V
 *      9     ->    IX
 *      10    ->    X
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 * 
 */

function romanNumeral(n) {
    let romanNumerals = {
        singleValues : {
            1: 'I',
            2: 'II',
            3: 'III',
            4: 'IV',
            5: 'V',
            6: 'VI',
            7: 'VII',
            8: 'VIII',
            9: 'IX',
            }
    };

    let values = Object.values(romanNumerals);
    let keys = Object.keys(romanNumerals);
    console.log('at [0]: ', romanNumerals.singleValues[0]);
    // console.log(keys);
    console.log(values);



    let doublesObj = {
        10: 'X',
        20: 'XX',
        30: 'XXX',
        40: 'XL',
        50: 'L',
        60: 'LX',
        70: 'LXX',
        80: 'LXXX',
        90: 'XC'
    }
    console.log('entries is : ', Object.entries(doublesObj))

    for (let singleKey in doublesObj) {
      
    }

    let hundredsObj = {
        100: 'C',
        200: 'CC',
        300: 'CCC',
        400: 'CD',
        500: 'D',
        600: 'DC',
        700: 'DCC',
        800: 'DCCC',
        900: 'CM'
    }

    let thousandObj = {
        1000: 'M'
    }

    let conversionArr = [];
    let workingArr = [];
    let match;
    let value = doublesObj;

    let stringNum = n.toString().split('');
    
    if (stringNum.length === 1) {
        
    }
    console.log(stringNum.length);
    console.log(typeof stringNum);
    console.log(workingArr);
    


}

console.log(romanNumeral(4));
console.log(romanNumeral(5));
// console.log(romanNumeral(44));
// console.log(romanNumeral(57));
// console.log(romanNumeral(63));
// console.log(romanNumeral(79));
// console.log(romanNumeral(102));
// console.log(romanNumeral(400));
// console.log(romanNumeral(500));
// console.log(romanNumeral(900));
// console.log(romanNumeral(1000));


module.exports = romanNumeral;
