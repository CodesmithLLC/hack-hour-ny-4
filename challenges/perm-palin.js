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
  const isPalin = (str) => str === str.split('').reverse().join('');

  const getPerm = (str) => {
    let permArr = [];
    let strArr = str.split('');

    let addPermElem = (str, letters) => {
      if (letters.length === 1) return permArr.push(str += letters[0]);
      letters.forEach((letterElem, letterInd, letterArr) => {
        addPermElem(str + letterElem, letterArr.filter((filterElem, filterInd) => filterInd !== letterInd));
      });
    };

    addPermElem('', strArr);
    return permArr;
  };

  return getPerm(str).some((str) => isPalin(str));
}

module.exports = permPalin;