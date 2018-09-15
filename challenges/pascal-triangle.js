/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

function pascalTriangle(numRows) {
  // each row is 1 plus the row before it 
  let triangle = [];
  for (let i = 0; i < numRows; i++) {
    triangle = new Array(i);
    triangle.unshift(1);
    if (triangle[1])
    console.log('triangle: ', triangle);
    
  }

  // need to push the leftmost number into each row
  // if more than 2 elements, sum up each pair and put into subsequent array 
  // only 1 side -> middle is what you need, the other side is a repeat
}

pascalTriangle(6);

module.exports = pascalTriangle;
