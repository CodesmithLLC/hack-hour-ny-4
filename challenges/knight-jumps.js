// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

function knightjumps(str) {
  const CHESS_BOARD_MAX_WIDTH = 8;
  const x = parseInt(str[1]);
  const y = parseInt(str[3]);
  const possMoves = [
    [1, 2],
    [-1, 2],
    [-2, 1],
    [-2, -1],
    [-1, -2],
    [1, -2],
    [2, -1],
    [2, 1]
  ];
  return possMoves.reduce((acc, curMove) => {
    return (x + curMove[0] <= CHESS_BOARD_MAX_WIDTH
      && x + curMove[0] >= 1
      && y + curMove[1] <= CHESS_BOARD_MAX_WIDTH
      && y + curMove[1] >= 1) ? acc + 1 : acc;
  }, 0);
}

module.exports = knightjumps;
