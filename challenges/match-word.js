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
  const delBank = {
    '_': '_',
    '-': '-'
  };
  let array = str.split('');
  for(let i = 0; i < array.length; i += 1){
    if (array[i] in delBank){
      array[i] = ' ';
    }
  }
  array = array.join('').trim().split(' ');
  console.log(array);
  
  
}


function balanced(array) {
  let bracketBank = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  let stack = array;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === ')' || array[i] === ']' || array[i] === '}') {
      if (stack.pop() != array[i]) {
        return false;
      }
    }
    if (array[i].split('').reverse().join() in stack){
      if (stack.pop() != array[i]) {
        return false;
      }
    }
  }
  return !stack.length;
}

module.exports = matchWord;

console.log(matchWord('__ENDDNE__'));
// console.log(matchWord('__END_DNE-----'));