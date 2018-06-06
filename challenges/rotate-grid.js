/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents 
 * the ith row in the grid.
 * 
 * Write a function to rotate the grid 90 degrees clockwise. 
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *                  
 *                  rotateGrid(sampleGrid, 3);
 *                  
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 *
 * BONUS: Do this in place
 */

 // 1,2,3, 4,5,6, 7,8,9
 // 4,1,2, 7,5,3, 8,9,6
 // 7,4,1, 8,5,2, 9,6,3
 // 8,7,4, 9,5,1, 6,3,2

 // 1,2,3, 6, 9,8,7, 4
 // 4,1,2, 3, 6,9,8, 7
 // 7,4,1, 2, 3,6,9, 8

function rotateGrid(grid, n) {
  // let newArr = [...grid[0]];
  // for(let i = 1; i < grid.length-1; i++) {
  //   let row = grid[i];
  //   newArr.push( row[row.length-1] );
  // }
  // newArr.push(...grid[grid.length-1].reverse());
  // for(let i = grid.length-1-1; i > 0; i--) {
  //   let row = grid[i];
  //   newArr.push( row[0] ); 
  // }

  // for(let i = 1; i < n; i++) {
  //   newArr.unshift(newArr.pop());
  // }

}

module.exports = rotateGrid;
