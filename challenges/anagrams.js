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
  let combinations = [];
  let letters = string.split('');
  let results;
  if (string.length > 0) {
    results = letters.reduce((acc, curr) => (acc.concat(curr)));
  } else {
    return combinations;
  }
  // console.log('results: ', results);
  combinations.push(results);
  console.log('combinations: ', combinations);
  anagrams(string.reverse().slice(1));
}

console.log(anagrams('abc'));

module.exports = anagrams;
