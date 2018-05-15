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
 *  balancedParens('{[({})]}');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

/* eslint-disable */

function balancedParens(input){
	let unmatched = [];
	let openChar = /[\[\{\(]/;
	let closeChar = /[\]\}\)]/;

	for (let i = 0; i < input.length; i += 1) {

		if (openChar.test(input[i])) unmatched.push(input[i]);

		else if (closeChar.test(input[i])) {
			if (input[i] === ')' && unmatched[unmatched.length - 1] === '(') unmatched.pop()
			else if (input[i] === ']' && unmatched[unmatched.length - 1] === '[') unmatched.pop()
			else if (input[i] === '}' && unmatched[unmatched.length - 1] === '{') unmatched.pop()
			else return false;
		}
	}
  
  if (unmatched.length > 0) return false;
	return true;
}

module.exports = balancedParens;
