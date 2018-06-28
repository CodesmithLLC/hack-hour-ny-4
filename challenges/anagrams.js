/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
  * example:
  * var result = anagrams('abc');
  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
  */

function anagrams(string) {
  const anagramArr = [];

  const recurHelp = (curWord, remLetters) => {
    if (remLetters.length === 1) return anagramArr.push(curWord + remLetters[0]);

    remLetters.forEach((letter, forInd) => {
      recurHelp(curWord + letter, remLetters.filter((val, filterInd) => filterInd !== forInd));
    });
  };

  string.split('').forEach((letter, forInd, strArray) => {
    recurHelp(letter, strArray.filter((val, filterInd) => filterInd !== forInd));
  });

  return anagramArr;
}

module.exports = anagrams;
