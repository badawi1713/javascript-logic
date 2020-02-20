// No. Create a static array, then make few functions that can be used to search the smallest and the largest number, also 2 functions that can do sorting the value of the array by ascending dan descending.
var array = [6, 22, 34, 15, 2, 13, 26, 57, 42, 32];

// A. Smallest number from Array
function smallestNumber() {
  let smallest = array[0];
  for (var i = 1; i < array.length; i++) {
    if (array[i] < smallest) {
      smallest = array[i];
    }
  }
  return smallest;
}

console.log("A. The smallest number: ", smallestNumber());

// B. Largest number from Array
function largestNumber() {
  let largest = 0;
  for (var i = 1; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  return largest;
}

console.log("B. The largest number: ", largestNumber());

// C. Ascending Sort
function ascendingSortArray() {
  for (var i = array.length - 1; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
      if (array[i] < array[j]) {
        let ascendingNumber = array[i];
        array[i] = array[j];
        array[j] = ascendingNumber;
      }
    }
  }
  return array;
}
console.log("C. Ascending sort:", ascendingSortArray());

// D. Descending Sort
function descendingSortArray() {
  for (var i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[i] < array[j]) {
        let descendingNumber = array[i];
        array[i] = array[j];
        array[j] = descendingNumber;
      }
    }
  }
  return array;
}
console.log("D. Descending sort:", descendingSortArray());
