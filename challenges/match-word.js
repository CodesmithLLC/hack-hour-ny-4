/* eslint-disable */

// Some languages have "if" statements that are closed by "fi" instead of curly brackets. 
//Or they close a "case" with "esac", 
//i.e. the same keyword backwards. for this problem we'll check that all words 
//in a string are "closed". Write a function that 
//takes a string and returns true if every word is closed by its backwards counterpart. 
//Words must be separated by space or 
//punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ] 
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  // if there is an if, should have a fi 
    // end should have DNE 
    // should be separated by a space
    // should all be case-insensitive
    // should have 1 space after the end closing
    // should be true if empty string
  str = str.toLowerCase();
  if (str.length === 0) {
  	return true;
  }  else if ((str.includes('if') && str.includes('fi')) || (str.includes('end') && str.includes('dne'))) {
  	// check to see there aren't any other words between 
  	// check to see if there is a space between and after 
      for(let i = 0; i < str.length; i++) {
        if(str[i] === 'f' || str[i] === 'd') {
         if(str[i + 1] === //not a number or letter && ) 
        }
      }
  } 

}

matchWord('if_fi');
module.exports = matchWord;
