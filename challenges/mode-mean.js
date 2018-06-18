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

function modemean(array) {
  const modeCache = {}; 
  array.forEach((e) => { 
    if (!modeCache[e]) { 
      modeCache[e] = 1; 
    } else { 
      modeCache[e]++; 
    }//end if else
  }); 

  var frequency = 0;
  var mode = 0;  
  for (let e in modeCache) { 
    if (modeCache[e] > frequency) { 
      frequency = modeCache[e]; 
      mode = parseInt(e); 
    }//end if 
  }; 

  let arrSum = array.reduce((accum, curr, index) => { 
    accum += curr; 
    return accum; 
  }); 

  const mean = Math.floor(arrSum/array.length); 

  return mode === mean; 
}

module.exports = modemean;