// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort


function bubbleSort(array) {
  // iterate through array 
  for (let i = 0; i < array.length; i++) {
    // iterate through array starting at element after primary loop (i + 1)
    console.log('arr[i]: ', array[i]);
    for (let j = i + 1; j < array.length; j++) {
      // if j has been sorted arr[j] > arr[i]
      console.log('arr[j]: ', array[j]);
      if (array[j] > array[i]) {
        if (array[j] < array[j + 1]) {
          // lock it? 
        }
      } else {
        array[j] = array[i];
      }
      // if j has not been sorted, sort it 
    }
  }

 
}

bubbleSort([2, 8, 5, 3, 1]);

module.exports = bubbleSort;
