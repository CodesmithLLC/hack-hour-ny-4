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
  if(!n) return 1;
  let result = [];
	let steps = [1,2];
  function rec(subArr) {
    let total = subArr.reduce((acc, cur) => acc += cur,0);
    if(total > n) return;
    if(total === n) return result.push(subArr);
		for(let i = 0; i < steps.length; i++) {
			rec(subArr.concat(steps[i]));
		}
  }
	rec([]);
  return result.length;
}

module.exports = countStairs;
