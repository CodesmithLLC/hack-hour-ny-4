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

function evenArr(input) { 
    if (input.length % 2 === 0) {
      let firstHalf = input.slice(0, input.length/2); 
      let secondHalf = input.slice(input.length/2, input.length); 
  
      let secondHalfCheck = ''; 
  
      let index = firstHalf.length; 
      while (index > -1) { 
        switch (firstHalf[index]) { 
          case '(': 
            secondHalfCheck += ')';
          break; 
          case '{': 
            secondHalfCheck += '}'; 
          break;
          case '[': 
            secondHalfCheck += ']'; 
          break;
        }//end switch
        index--; 
      }//end while
  
      if(secondHalf === secondHalfCheck) {return true;}
    }//end if
  }
  
  function balancedParens(input) {
    let nextTo = [];  
    let index = 0; 
    while (index < input.length) { 
      switch (input[index]) { 
        case '(':
          if (input.indexOf(')') === -1) {return false;}
          if (input.indexOf(')') === index+1) {nextTo.push(true)}
          console.log('(', input.indexOf('(')); 
          console.log(')', input.indexOf(')')); 
          break; 
        case '{':
          if (input.indexOf('}') === -1) {return false;}
          if (input.indexOf('}') === index+1) {nextTo.push(true);}
          console.log('{', input.indexOf('{')); 
          console.log('}', input.indexOf('}')); 
          break; 
        case '[': 
          if (input.indexOf(']') === -1) {return false;}
          if (input.indexOf(']') === index+1) {nextTo.push(true);}
          console.log('[', input.indexOf('['));
          console.log(']', input.indexOf(']')); 
          break;
      }//end switch 
      index++; 
    }//end while
  
    if (nextTo.includes(false)) {
      return false;
    } else if (evenArr(input) === true) { 
      return true; 
    }//end if
  }

module.exports = balancedParens;
