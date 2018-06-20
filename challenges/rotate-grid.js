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
    // 1 360 degree rotation is the same 
    // 180 degrees is the reverse of each array but ordered from top to bottom 
    // 90 degrees is bottommost array to be on left vertically 
    // grid could be any size, indicated by n 
    // take first three left nums in each row and put into an array
    let returnGrid = [];
    let rows = n;

    while(rows) {
        returnGrid.push([]);
        rows--;
    }

    console.log('return Grid: ', returnGrid);

    grid.forEach((row) => {
      row.forEach((num) => {
        console.log('row: ', row);
        console.log('num: ', num);
      });
    });

    console.log(returnGrid[0]);

    return returnGrid;
}

 rotateGrid([[ 1, 2, 3 ],
            [ 4, 5, 6 ],
            [ 7, 8, 9 ]], 3);

module.exports = rotateGrid;
