/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
  var starArr = []; 
  var spaceArr = []; 
  var combined = []; 

  var stars = ''; 
	var spaces = '';

  for (let j = 0; j < n-1; j++) { 
    spaces += ' ';
    spaceArr.push(spaces); 
  }

	for (let i = 0; i < n; i++) { 
    stars += '*';
    starArr.push(stars);  
  }//end for

  var starsIndex = 0;
  for (let i = spaceArr.length-1; i > 0; i--) { 
    combined.push(spaceArr[i].concat(starArr[starsIndex])); 
    starsIndex+=1;
  }//end for

  console.log(combined); 
}


module.exports = drawStairs;
