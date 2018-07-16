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
  if(numRows <= 0 || typeof numRows !== 'number') return 0;
  let result = [[1]];
  if(numRows === 1) return result;
  result.push([1,1]);
  if(numRows === 2) return result;
  rec = (currentRow) => {
    let arr = result[result.length - 1];
    let subArr = [1];
    for(let i = 0; i < arr.length - 1; i++) {
      subArr.push(arr[i]+arr[i+1]);
    }
    subArr.push(1);
    result.push(subArr);
    if(currentRow === numRows) return;
    else rec(currentRow+1);
  }
  rec(3);
  return result;
}

module.exports = pascalTriangle;
