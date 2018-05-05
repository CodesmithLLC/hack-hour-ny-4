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
    var sum = array.reduce(function(accum, curr) { 
        accum += curr; 
        return accum; 
      }, 0); 
  
      var mean = Math.floor(sum/array.length); 
      
      var mode = array.reduce(function(accum, curr, index) {
          var occurence = 0;  
          if (!accum[curr]) { 
            occurence += 1; 
            accum[curr] = occurence; 
          } else if (accum.hasOwnProperty(curr)) {  
            accum[curr]++; 
          }//end if else 
          return accum;
      }, {}); 
  
      var max = 0;
      var maxProp = 0; 
      for(var prop in mode) {
        if(mode[prop] > max) { 
          max = mode[prop];
          maxProp = prop;
        }//end if  
      }//end for
  
      return maxProp === 'mean';  
}

module.exports = modemean;
