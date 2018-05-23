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

function matchWord(str) {
  let strArr = str.replace(/[&\/\\#,\-_+()$~%@.'":*?!<>\[\]{}]/g,' ').split(' ').filter((elem)=> {
    return elem !== '';
  });;
  let stack = [].push(strArr[0]);
  for(let i = 1; i < strArr.length; i++) {
    if(stack[stack.length]) {
      if(stack[stack.length - 1].toLowerCase() === strArr[i].split('').reverse().join('').toLowerCase() ) {
        stack.pop();
      } else {
        stack.push(strArr[i]);
      }
    }
  }
  return !stack.length;
}

module.exports = matchWord;
