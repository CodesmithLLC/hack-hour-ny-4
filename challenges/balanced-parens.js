/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens( '(' );  // false
 *   balancedParens( '()' ); // true
 *   balancedParens( ')(' );  // false
 *   balancedParens( '(())' );  // true
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
  let stringArr = input.split('');
  let checked = [];
  for(let i = 0; i < stringArr.length; i++){
    checked.push(stringArr[i]);
  }
  return checkArray(checked)
}

function checkArray(array){
  let open = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] === '(') open[i] = array[i];
    if(array[i] === ')') {
      if (open.includes('(')){
        open.pop(open.indexOf('('));
      } 
    }
  }
  // console.log(open.length)
  // console.log(open);
  let length = open.length
  // console.log('length', length);
  if(length === 0) console.log('true');
  else console.log('false');
}


module.exports = balancedParens;

// balancedParens( ')(' );
// balancedParens('()');
// balancedParens( '(())' );
// balancedParens( ')(' );