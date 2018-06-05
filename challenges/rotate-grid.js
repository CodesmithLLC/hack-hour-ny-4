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

function rotateGrid(grid, n) {
  let matrix = grid.reverse();
  console.log(matrix)
  //n is matrix.length
  //access each matrix
  for (let i = 0; i < n; i++) {
    //access each element in matrix
    //iterate over i so that the starting index is incremented by 1 each time
    //we don't want to access each value - just the one that need rotating
    for (let j = 0; j < i; j++) {
      //save the initial value
      let temp = matrix[i][j]
      console.log(temp);
      console.log(matrix[i][j])
      //rotate aka swap values
      matrix[i][j] = matrix[j][i];
      console.log(matrix[i][j])
      matrix[j][i] = temp;
      //reassign temp, need to save the new starting value before rotating
    }
  }
  return matrix;
};

console.log(rotateGrid([[1, 2, 3], [4, 5, 6], [7, 8, 9]], 3))

module.exports = rotateGrid;
