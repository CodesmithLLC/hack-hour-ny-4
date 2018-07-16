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
  let pascalArr = [[1], [1,1]];
  if (numRows <= 0) return [];
  if (numRows === 1) return pascalArr.slice(0,1);
  if (numRows === 2) return pascalArr;

  numRows -= 2;
  while (numRows > 0) {
    curArr = pascalArr[pascalArr.length - 1];
    newArr = [1];
    for (let i = 0; i < curArr.length - 1; i += 1) {
      newArr.push(curArr[i] + curArr[i + 1]);
    }
    newArr.push(1);

    pascalArr.push(newArr);
    numRows -= 1;
  }

  return pascalArr;
}

module.exports = pascalTriangle;
