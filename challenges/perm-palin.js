/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
    let charArr = str.split('');
    if (charArr.length === 1  ||  charArr.length === 2 ){
        return true;
    }
    else {
        for (i = 1; i < charArr.length; i++){
            if (charArr[i - 1] === charArr[i + 1]){
                return true;
            }
        }
    }
    return false;
    //console.log(charArr);
}

//console.log(permPalin('abab'));



module.exports = permPalin;