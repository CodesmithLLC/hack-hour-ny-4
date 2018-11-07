/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 *
 * Example: n === 5. You are 5 steps away from the top. You can take these different ways to the top:
 * 1 + 1 + 1 + 1 + 1
 * 1 + 1 + 1 + 2
 * 1 + 1 + 2 + 1
 * 1 + 2 + 1 + 1
 * 1 + 2 + 2
 * 2 + 1 + 1 + 1
 * 2 + 1 + 2
 * 2 + 2 + 1
 *
 * That is a total of 8 different ways to take 5 steps, given that you can take 1 or 2 steps at a time.
 */

function countStairs(n) {
  // permutation problem
  // start with all 2s then sub 1s when needed 
  // will need some kind of counter to count the valid possibilities of reaching n 
  // you know that you can always get there in steps of 1, so that's 1 route 
  // if n - 1 is even, you can have 2x = n - 1 
    // for every time a 2 appears, you can substitute two ones


}

/* 3 ways to get 3 
1 + 1 + 1 
2 + 1 
1 + 2 
*/

/* 5 ways to get 4
1 + 1 + 1 + 1
2 + 1 + 1
1 + 2 + 1
1 + 1 + 2
2 + 2 

/* 8 ways to get 5 
 
1 + 1 + 1 + 1 + 1 
counter ++

2 + 2 + 1                   => 1 + 2 + 2       => 2 + 1 + 2
if n -1 % 2 === 0           
counter++
// get num of 2s by doing n - 1 / 2 
for every 2 that exists, opens up permutations available by 2^(number of 2s)

1 + 1 + 2 + 1 => 1 + 2 + 1 + 1 => 1 + 1 + 1 + 2 
2 + 1 + 1 + 1 => 
*/

/* x ways to get 6
1 + 1 + 1 + 1 + 1 + 1
2 + 2 + 2

2 + 1 + 1 + 1 + 1
1 + 2 + 1 + 1 + 1
1 + 1 + 2 + 1 + 1
1 + 1 + 1 + 2 + 1
1 + 1 + 1 + 1 + 2

2 + 2 + 1 + 1 
2 + 1 + 2 + 1
2 + 1 + 1 + 2

1 + 2 + 2 + 1
1 + 1 + 2 + 2 


*/




module.exports = countStairs;
