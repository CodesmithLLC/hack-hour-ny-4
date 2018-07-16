// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

// function knightjumps(str) {
  
// }

// function makeKnightBoard() {
//   for(let i = 0; i < 8; i++){
    
//   }
// }


// First Brute Force Approach.

function knightjumps(str) {
  let xCor = Number(str[1]);
  let yCor = Number(str[3]);
  if(xCor < 1 || xCor > 8 || yCor < 1 || yCor > 8) {
    return false;
  } else if(xCor === 1 || xCor === 8) {
    if(yCor === 1 || yCor === 8) {
      return 2;
    } else if(yCor === 2 || yCor === 7) {
      return 3;
    } else {
      return 4;
    }
  } else if(yCor === 1 || yCor === 8) {
    if(xCor === 1 || xCor === 8) {
      return 2;
    } else if(xCor === 2 || xCor === 7) {
      return 3;
    } else {
      return 4;
    }
  } else if(xCor === 2 || xCor === 7) {
    if(yCor === 1 || yCor === 8) {
      return 3;
    } else if(yCor === 2 || yCor === 7) {
      return 4;
    } else {
      return 6;
    }
  } else if(yCor === 2 || yCor === 7) {
    if(xCor === 1 || xCor === 8) {
      return 3;
    } else if(xCor === 2 || xCor === 7) {
      return 4;
    } else {
      return 6;
    }
  } else {
    return 8;
  }
}

module.exports = knightjumps;
