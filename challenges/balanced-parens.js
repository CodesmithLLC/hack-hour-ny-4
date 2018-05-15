function balancedParens(input){
  let chars = input.split('').filter((char) => {
    if (char === '(' || char === ')' || char === '[' || char === ']'|| char === '{' || char === '}') return char;
  });

  let parens = parenMapper(chars);
  let output = true;
  
  for (let key in parens) {
    if (parens[key] % 2 !== 0) {
      return false;
    }
  }
  return output;
}

function parenMapper (arr) {
  var parenTracker = {};
  arr.forEach((char) => {
    parenTracker[char] =  (parenTracker[char] || 0) + 1;
  });
  return parenTracker;
}

module.exports = balancedParens;
