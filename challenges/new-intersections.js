/**
 *
 * You are given an array x and an array y that represent the coordinates of several OLD points
 * 
 *   - x is the array of x-coordinates and y is the array of y-coordinates 
 *   - (x[i], y[i]) correspond to coordinates of the i'th OLD point
 *
 * Write an algorithm to find the number of NEW points that can be placed 
 * such that there are OLD points above, below, to the left, and to the right of the NEW point
 *
 *   - 'OLD directly above NEW' means the NEW x-coordinate = OLD x-coordinate & NEW y-coordinate < OLD y-coordinate
 *
 * Constraints and Notes:
 *
 * 	 - x and y will contain the same number of elements
 *   - if a new point is bounded by old points and lands on an old point, then count it
 * 	 
 */

function newIntersections(x, y){
  let xMem = {};
  for (let i = 0; i < x.length; i += 1) {
    if (xMem[x[i]] === undefined) xMem[x[i]] = [y[i]];
    else xMem[x[i]].push(y[i])
  }
  Object.keys(xMem).forEach((key) => {
    if (xMem[key].length < 2) delete xMem[key];
    else xMem[key] = [Math.min(...xMem[key]), Math.max(...xMem[key])];
  });

  let yMem = {};
  for (let i = 0; i < y.length; i += 1) {
    if (yMem[y[i]] === undefined) yMem[y[i]] = [x[i]];
    else yMem[y[i]].push(x[i])
  }
  Object.keys(yMem).forEach((key) => {
    if (yMem[key].length < 2) delete yMem[key];
    else yMem[key] = [Math.min(...yMem[key]), Math.max(...yMem[key])];
  });

  let intCount = 0;
  Object.keys(xMem).forEach((xKey) => {
    Object.keys(yMem).forEach((yKey) => {
      if (yKey > xMem[xKey][0] 
          &&  yKey < xMem[xKey][1] 
          &&  xKey > yMem[yKey][0] 
          &&  xKey < yMem[yKey][1]) intCount += 1;
    });
  });

  return intCount;
}

module.exports = newIntersections;
