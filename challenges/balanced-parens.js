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
  const output = [];
  const inputArr = input.split("");
  console.log(inputArr);
  const validChars = ["{", "}", "[", "]", "(", ")"];
  inputArr.filter(char => {
    if (validChars.includes(char)) output.push(char);
    return output;
  });
  const finalChars = ["(", ")"];
  for (let i = 0; i < output.length; i++) {
    if (output.indexOf(finalChars)) return true;
  }
  return false;
}

// console.log(balancedParens(" var hubble = function() { telescopes.awesome();"));
module.exports = balancedParens;
