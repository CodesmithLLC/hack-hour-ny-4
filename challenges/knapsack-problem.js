/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/


// //RECURSIVE
// function solveKnapsack(itemsLeft, weightAvailable) {
//   // Check to see if inputs are proper and are greater than 0.
//   // If not, return 0.
//   if (itemsLeft.length === 0 || weightAvailable <= 0) return 0;

//   // if first item is too heavy to fit, disregard it and consider other items
//   if (itemsLeft[0].weight > weightAvailable) {
//     return solveKnapsack(itemsLeft.slice(1), weightAvailable);
//   }

//   //if first item does fit
//   else {
//     //create variale that is a shallow copy/slice for the rest of the items
//     let left = itemsLeft.slice(1);
//     // Create a variable that stores the outcome value of keeping the item
//     let takeItem = itemsLeft[0].value + solveKnapsack(left, weightAvailable - itemsLeft[0].weight);
//     //create a variable the stores the outcome value of not keeping it
//     let leaveItem = solveKnapsack(left, weightAvailable);

//     //return the greater of the two variables, which are acting as both possible outcomes
//     //With the recursive calls you are checking every possibility
//     return (takeItem > leaveItem) ? takeItem : leaveItem;
//   }
// }

// //RECURSIVE SOLUTION TRACKING ITEMS
// function solveKnapsack(itemsLeft, weightAvailable) {
//   //create variable for the selected items to be added to the knapsack
//   const selected = {
//     value : 0,
//     list : []
//   };

//   //base case to exit recursion and return the selected items value
//   if (itemsLeft.length === 0 || weightAvailable === 0) return selected.value;

//   // if first item is too heavy to fit, consider other items
//   if (itemsLeft[0].weight > weightAvailable) {
//     return solveKnapsack(itemsLeft.slice(1), weightAvailable);
//   }

//   //if first item does fit
//   else {
//     //create a variable the stores the outcome value of not keeping it
//     // leaveItem must be declared before takeItem for proper outcome
//     let leaveItem = solveKnapsack(itemsLeft.slice(1), weightAvailable);
//     // Create a variable that stores the outcome value of keeping the item
//     let takeItem = solveKnapsack(itemsLeft.slice(1), weightAvailable - itemsLeft[0].weight);

//     //push the kept item to the list of an object that tracks the kept items
//     const takeItem = {
//       value : itemsLeft[0].value + takeItem.value,
//       list : takeItem.list
//     }
//     takeItem.list.push(itemsLeft[0]);

//     //return the greater of the two variables, which are acting as both possible outcomes
//     return (takeItem.value > leaveItem.value) ? takeItem : leaveItem;
//   }
// }

//DYNAMIC PROGRAMMING SOLUTION
function solveKnapsack(itemsLeft, weightAvailable) {
  //initialize the table
  let mem = [];

  // build the table
  for (let n = 0; n <= itemsLeft.length; n++) {

    mem.push([]);
    for (let w = 0; w <= weightAvailable; w++) {
      // if 0 items in consideration or 0 weight available, set value to zero
      if (n === 0 || w === 0) mem[n][w] = 0;

      // if item.weight > weightAvailable, return mem[n - 1][w]
      // current item is itemsLeft[n - 1] because we start from n = 1
      else if (itemsLeft[n - 1].weight > w) {
        mem[n][w] = mem[n - 1][w];
      }

      else {
        let item = itemsLeft[n - 1];
        let take = item.value + mem[n - 1][w-item.weight];
        let leave = mem[n - 1][w];

        mem[n][w] = (take > leave) ? take : leave;
      }
    }
  }

  // after we exit the for loops, the table (mem) will have been built,
  // with the answer we want saved at the bottom right most corner of the table
  return mem[itemsLeft.length][weightAvailable];
}

module.exports = solveKnapsack;
