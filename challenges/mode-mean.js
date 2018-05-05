/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */
// mean === average 
// mode === number repeated most frequently

function modemean(array) {
  var collection = {};
  var sum = 0;
  for(var i = 0; i < array.length; i++) {
    sum += array[i];
    if(collection.hasOwnProperty(array[i])) {
      collection[array[i]] += 1;
    } else {
      collection[array[i]] = 1;
    }
  }
  var average = Math.floor(sum / array.length)
  var high = 0;
  var highPoint = 0
  var entries = Object.entries(collection);
  for(var i = 0; i < entries.length; i++) {
    if(entries[i][1] >= 0) {
      high = entries[i];
      highPoint = entries[i];
    }
  }
  if(highPoint[0] === average) return true;
   else return false;
}

module.exports = modemean;
