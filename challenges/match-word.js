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
    if(!str.length) return true;
    const alph = 'abcdefghijklmnopqrstuvwxyz';
    const split = str.toLowerCase().split('');
    const stack = [];
    let keywords = {
      'end': 'dne',
      'if': 'fi',
      'for': 'rof',
      'while': 'elihw',
      'try': 'yrt',
    }
    let curr = '';
    for(let i = 0; i < split.length; i++) {
      if(alph.indexOf(split[i]) !== -1) {
        curr += split[i];
      } else if(keywords.hasOwnProperty(curr)){
        stack.push(curr);
        curr = '';
      } else if(curr === keywords[stack[stack.length -1]]) {
        stack.pop();
        curr = '';
      }
    }
  
    if(!stack.length) {
      return true;
    } else {
      return false;
    }
  }

module.exports = matchWord;
