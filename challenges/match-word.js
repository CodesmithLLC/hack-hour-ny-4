// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that 
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or 
//punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

// space or punctuation
// fi if
// done , for !! for && rof

function matchWord(str) {
    console.log(str);
    let amLetter = /[A-Z]/i;
    let space = /\n/i;
    // const values = {
    //     '[':  ']',
    //     '{' : '}',
    //     'for': 'rof',
    // }
    let middleStuff = [];

    let lBracket ='[';
    let rBracket = ']';
    let lCurly = '{';
    let rCurly = '}';
    let forEsac = 'for';
    let rofEsac = 'rof';

    let pairs= /[lBracket, rBracket, lCurly, rCurly, forEsac, rofEsac]/gi;

    let firstMatch = amLetter.exec(str).index;
    console.log(firstMatch);
    let arrStr = str.split('');
    console.log(arrStr);
    arrStr = arrStr.splice(firstMatch).reverse().join('');
    let secondMatch = amLetter.exec(arrStr).index
    console.log(secondMatch);
    console.log(arrStr);
    let otherHalf = arrStr.split('').splice(secondMatch);
    console.log(otherHalf);
    for (let i = 0; i < otherHalf.length; i++) {
        if (!otherHalf[i].match(amLetter)) {
            middleStuff.push(otherHalf[i]);
            delete otherHalf[i];
        }
    }

    console.log(middleStuff);
    console.log(middleStuff.length);

    let otherHalfR = otherHalf.slice().reverse();
    // otherHalf = otherHalf.join('');
    console.log(otherHalf);
    console.log(otherHalfR);

    if(typeof str === undefined || middleStuff.length === 0) return false;

    //return otherHalf === otherHalfR;
    

}

// console.log(matchWord('__END_DNE-----')); //-> true
//console.log(matchWord('__ENDDNE__'));  //-> false       (not separated by a space)
//console.log(matchWord('IF()()fi[]'));  //-> true        (should be case-insensitive)
//console.log(matchWord('for__if__rof__fi'));  //-> false     not properly closed. like ( [) ] 
//console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));  // -> true
console.log(matchWord('')); // true

module.exports = matchWord;
