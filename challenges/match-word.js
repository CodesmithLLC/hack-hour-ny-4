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

///

function genCharArray(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i).toUpperCase());
    }
    return a;
}
var letters = genCharArray('a', 'z');
//

function matchWord(str) {
    strArr = str.toUpperCase().split('');
    compArr = str.toUpperCase().split('');
    //console.log(strArr)
    //var letters = /^[A-Za-z]+$/;
    //var letters = [A, B, C, D, E];
    //console.log(letters)
    stack = [];
    //
    for (let i = 0; i < strArr.length; i++) {
        if (letters.includes(strArr[i])) {
          stack.push(strArr[i]);  
        }
    }
      //let popped = stack.pop();
      //console.log(popped);
      console.log(stack)
      console.log(stack.reverse())
      if (stack === stack.reverse()){
         return true;
      }
      return false;
    };
//  

//}

module.exports = matchWord;

console.log(matchWord('for__if__rof__fi'));