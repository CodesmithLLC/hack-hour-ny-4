// Write a function that takes a number as an argument and returns its english word representation as a string. 
// Answers should be in upper camel case (a.k.a. Pascal case). Don't worry about spaces.
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

 /*
  0 - Zero

 */

function numToWords(num) {
  if(num === 0) return 'Zero';
  const word1 = ['One','Two','Three','Four','Five','Six','Seven','Eight','Nine'];
  const word2 = ['Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen'];
  const word3 = ['','Twenty','Thirty','Fourty','Fifty','Sixty','Seventy','Eighty','Ninety'];
  const word4 = ['Hundred','Thousand','Million','Billion','Trillion','Quadrillion'];
  let result = '';
  while(num >= 0) {
    if(num >= 1000) {
      let firstNum = Number( num.toString()[0] );
      for(let i = 0; i < word1.length; i++) {
        if(firstNum === i+1) {
          result += word1[i];
        }
      }
      result += 'Thousand';
      num = Number(num.toString().slice(1));
    } else if(num >= 100) {
      let firstNum = Number( num.toString()[0] );
      for(let i = 0; i < word1.length; i++) {
        if(firstNum === i+1) {
          result += word1[i];
        }
      }
      result += 'Hundred';
      num = Number(num.toString().slice(1));
    } else if(num >= 10) {
      if(num > 19) {
        let firstNum = Number( num.toString()[0] );
        for(let i = 0; i < word3.length; i++) {
          if(firstNum === i+1) {
            result += word3[i];
          }
        }
        num = Number(num.toString().slice(1));
      } else {
        for(let i = 0; i < word2.length; i++) {
          if(num === i+10) {
            result += word2[i];
          }
        }
        num = -1;
      }
    } else {
      for(let i = 0; i < word1.length; i++) {
        if(num === i+1) {
          result += word1[i];
        }
      }
      num = -1;
    }
  }
}

module.exports = numToWords;
