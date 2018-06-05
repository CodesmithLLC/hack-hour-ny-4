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

function balancedParens(input) {
  let count = input.split('').reduce((counter, char) => {
    if (counter < 0) return counter;
    else if (char === ("{" || "[" || "(")) return counter += 1;
    else if (char === ("}" || "]" || ")")) return counter -= 1;
    else return counter;
  }, 0);
  return count === 0 ? true : false;
};

console.log(balancedParens(' var wow  = { yo: thisIsAwesome() }'));
module.exports = balancedParens;
