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

console.log(grid);
console.log(grid[0]);
console.log(grid[0][2]);
console.log(grid[1]);
console.log(grid[2]);

console.log(grid[2][2]);

console.log(grid.length);

for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        console.log(grid[i][j]);
        console.log(grid[i]);
    }
    console.log(grid[i]);
}

// 3 -  grid[0][2] => grid[2][2]
// 4 - grid[1][0] => [0][1]
// 5 - g

}

function arrayMove(arr, fromIndex, toIndex) {

}

let grid = [    [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9]  ];

console.log(rotateGrid(grid, 3));

// sampleGrid after:   [   [7, 4, 1],
//                         [8, 5, 2],
//                         [9, 6, 3]  ]


module.exports = rotateGrid;
