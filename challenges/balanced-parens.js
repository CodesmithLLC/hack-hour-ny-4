/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input){
    let tracker = [];
    for (value of input) {
      if (value === '(' || value === '[' || value === '{') {
        tracker.push(value);
      } else if (value === ')' || value === ']' || value === '}') {
        if (tracker[tracker.length - 1] === switcher(value)) tracker.pop();
        else return false;
      }
    }
    return (tracker.length === 0);
  }
  
  function switcher(input) {
    if (input === ')') return '(';
    else if (input === ']') return '[';
    else if (input === '}') return '{';
  }