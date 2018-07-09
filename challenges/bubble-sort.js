// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort


const arr = [3, 4, 2, 1, 6];
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) [array[i], array[j]] = [array[j], array[i]];
    }
  }
  return array;
}

console.log(bubbleSort(arr));

module.exports = bubbleSort;
