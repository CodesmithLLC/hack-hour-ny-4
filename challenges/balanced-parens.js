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
    let strSplit = input.split('');
    console.log(strSplit);

    let parens = '()';
    let bracket = '[]';
    let curlyB = '{}';

    function splicing (array) {
        let splicedBeg = array.splice(0,1) 
        let splicedEng = array.splice(-1, 1);
    
        let oneElem = splicedBeg.concat(splicedEnd).join('');
        return oneElem;
    }

    if (strSplit.length % 2) {
        return false;
    } else {
        let splicedEnd = strSplit.splice(-1, 1); 
        let splicedBeg = strSplit.splice(0, 1)
        let oneElem = splicedBeg.concat(splicedEnd).join('');
            console.log(splicedEnd);
            console.log(splicedBeg);
            console.log(oneElem);
            console.log(strSplit);
        if (oneElem !== parens || oneElem !== bracket || oneElem !== curlyB) {
            return false;
        } else {
            return balancedParens(strSplit);
        }
    }
}



// console.log(balancedParens('[(]{)}')); // false
console.log(balancedParens('[({})]')); // true
// console.log(balancedParens('[({})]')); // true
module.exports = balancedParens;
