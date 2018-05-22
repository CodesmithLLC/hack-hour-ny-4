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
    

    let firstMatch = amLetter.exec(str).index;
    console.log(firstMatch);
    let arrStr = str.split('');
    console.log(arrStr);
    arrStr = arrStr.splice(firstMatch).reverse().join('');
    let secondMatch = amLetter.exec(arrStr).index
    console.log(secondMatch);
    let otherHalf = arrStr.split('').splice(secondMatch);
    console.log(otherHalf);



    return otherHalf.reverse() === otherHalf;
    

}

console.log(matchWord('__END_DNE-----'));
//console.log(matchWord('__ENDDNE__'));  //-> false       (not separated by a space)
//console.log(matchWord('IF()()fi[]'));  //-> true        (should be case-insensitive)
//console.log(matchWord('for__if__rof__fi'));  //-> false     not properly closed. like ( [) ] 
//console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));  // -> true
//console.log(matchWord('')); // true

module.exports = matchWord;
