/*
  You have a knapsack with a weight limit.
  You are presented with an array of objects, each with its own weight and value.
  Find the maximum value you can fit into your knapsack, given the weight constraint.

  e.g.
  items = [{weight: 1, value : 3}, {weight: 2, value : 4}, {weight: 3, value : 5}];
  solveKnapsack(items, 3); // returns 7 (from items[0] and items[1])
  solveKnapsack(items, 5); // returns 9 (from items[1] and items[2])
*/

function solveKnapsack(items, weightAvailable) {
  let greatestVal = -Infinity;

  const recurFunc = (remItems, curWeight, curVal) => {
    remItems.forEach((item, ind) => {
      if (curWeight + item.weight <= weightAvailable) {
        if (curVal + item.value > greatestVal) greatestVal = curVal + item.value;
        let newRemItems = remItems.slice(0)
        newRemItems.splice(ind, 1);
        recurFunc(newRemItems, curWeight + item.weight, curVal + item.value);
      }
    })
  };

  recurFunc(items, 0, 0);

  return greatestVal;
};

module.exports = solveKnapsack;
