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

// function balancedParens(input){
// let leftCount = 0;
// let rightCount = 0;
// let inputArr = input.split('');
//     for (let i = 0; i < inputArr.length;i++){
//         if (inputArr[i] === '('){
//         leftCount++;
//         }
//     }
//     for (let j = 0; j < inputArr.length;j++){
//         if (inputArr[j] === ')'){
//         rightCount++;
//         }
//     }
// if (leftCount === rightCount) return true;
//     return false;
// //console.log(balanceCount);
// }

///


function balancedParens(input) {
    const stack = [];
    const openParens = { '{': '}', '[': ']', '(': ')' };
    const closedParens = { '}': true, ']': true, ')': true };
    
    for (let i = 0; i < input.length; i ++) {
      if (openParens[input[i]]) {
        stack.push(input[i]);
      } else if (closedParens[input[i]]) {
        if (openParens[stack.pop()] !== input[i]) return false;
      }
    }
    
    return stack.length === 0;
  };

  console.log(balancedParens('(())'));
  console.log(balancedParens(')('));
  console.log(balancedParens('[({})]'));  
  console.log(balancedParens('[(]{)}')); 

module.exports = balancedParens;
