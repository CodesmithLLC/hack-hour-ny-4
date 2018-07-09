// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort



function bubbleSort(array) {
    let sorted;
    do {
        sorted = false;
    for (let i = 0; i < array.length; i++){
        let smaller;
        let larger;
        if (array[i] > array[i +1]){
           smaller = array[i + 1];
           larger = array[i] 
           array[i] = smaller;
           array[i + 1] = larger;
           sorted = true;
        }
    }
} while (sorted)
    // console.log(array);

}

module.exports = bubbleSort;

// bubbleSort([7,3,5,2,8,1]);
