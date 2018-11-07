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

function anagrams(word) {
  if (word.length < 2) {
    return [word]
  } else {
    let allAnagrams = [];
    let before, focus, after;
    let shortWord, subAnagrams, newEntry;
    
    for (let i = 0; i < word.length; i++){
      
      before = word.slice(0, i);
      focus = word[i];
      after = word.slice(i + 1, word.length + 1);

      shortWord = before + after;
      subAnagrams = anagrams(shortWord);

      for (let j = 0; j < subAnagrams.length; j++) {
        
        newEntry = focus + subAnagrams[j];
        allAnagrams.push(newEntry);
      }
    }

    return allAnagrams;

  }
}



console.log(anagrams('abc'));

module.exports = anagrams;
