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
  let result = true;
  let brackets = [];
  for(let i = 0; i < input.length; i++) {
    if(input[i] === '(' || input[i] === '[' || input[i] === '{' || input[i] === ')' || input[i] === ']' || input[i] === '}') {
      brackets.push(input[i]);
    }
  }
  let temp = [];
  for(let j = 0; j < brackets.length; j++) {
    if(brackets[j] === '(' || brackets[j] === '[' || brackets[j] === '{') {
      temp.unshift(brackets[j]);
    }
    if(brackets[j] === ')' || brackets[j] === ']' || brackets[j] === '}') {
      if(temp[0] === '(') {
				if(')' === brackets[j]) {
					temp.shift();
				} else {
					result = false;
				}
			} else if(temp[0] === '[') {
				if(']' === brackets[j]) {
					temp.shift();
				} else {
					result = false;
				}
			} else if(temp[0] === '{') {
				if('}' === brackets[j]) {
					temp.shift();
				} else {
					result = false;
				}
			}
    }
  }
	if(temp.lenght % 2 !== 0 && temp.length !== 0) { 
		result = false;
	}
  return result;
}

module.exports = balancedParens;
