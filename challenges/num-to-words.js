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
    if (num === 0) return 'Zero'; 

    const dict = [
      { num: 90, str: 'Ninety' },
      { num: 80, str: 'Eighty' },
      { num: 70, str: 'Seventy' },
      { num: 60, str: 'Sixty' },
      { num: 50, str: 'Fifty' },
      { num: 40, str: 'Forty' },
      { num: 30, str: 'Thirty' },
      { num: 20, str: 'Twenty' },
      { num: 19, str: 'Nineteen' },
      { num: 18, str: 'Eighteen' },
      { num: 17, str: 'Seventeen' },
      { num: 16, str: 'Sixteen' },
      { num: 15, str: 'Fifteen' },
      { num: 14, str: 'Fourteen' },
      { num: 13, str: 'Thirteen' },
      { num: 12, str: 'Twelve' },
      { num: 11, str: 'Eleven' },
      { num: 10, str: 'Ten' },
      { num: 9, str: 'Nine' },
      { num: 8, str: 'Eight' },
      { num: 7, str: 'Seven' },
      { num: 6, str: 'Six' },
      { num: 5, str: 'Five' },
      { num: 4, str: 'Four' },
      { num: 3, str: 'Three' },
      { num: 2, str: 'Two' },
      { num: 1, str: 'One' },
    ]; 
  
    const places = ['', 'Thousand', 'Million', 'Billion', 'Trillion', 'Quadrillion'];
  
    //convert num to string and concat 0 till divisible by 3
    var str = String(num); 
    while (str.length % 3 !== 0) str = '0' + str; 
    
    //chunk into array of 3 digits
    //accum is array with string chunks only pushed when idx is divisible by 3
    //accum.length is undefined if accum not returned
    //curr is each string number 
    //convert string back to number
    const arr = str.split('').reduce((accum, curr, idx) => { 
      if (idx % 3 === 0) accum.push(curr); 
      else accum[accum.length-1] += curr;   
      return accum; 
    }, []).reverse().map(e => Number(e)); 
  
    //initalize output string
    //loop through reduced array creating strings of numbers
    //local string will account for words to concat to output
    //if num is greater than 100 divide by 100 to get first digit 
    //filter dictionary to get word equivalent of first digit from hundreds number
    //[0...90] is the digit, [0...90].str is to word equivalent respective
    //loop through dictionary, subtracting numbers from num until it reaches 0
    let output = '';
    arr.forEach((num, idx) => { 
      let localStr = '';
      if (num >= 100) { 
        let hundreds = Math.floor(num/100); 
        num -= 100 * hundreds; 
        localStr += dict.filter((e) => e.num === hundreds)[0].str + 'Hundred'; 
      }//end if
  
      while (num) { 
        dict.forEach((e) => { 
          if (num >= e.num) { 
            num -= e.num; 
            localStr += e.str; 
          }//end if
        });//end for each
      }//end while
  
      //add localStr to output, which undoes reveresing of the array
      //places[idx] 
      output = localStr + places[idx] + output; 
    });//end for each
  
    return output; 
}

module.exports = numToWords;