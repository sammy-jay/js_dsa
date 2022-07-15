function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (arr[i] < arr[j]) {
        swap(arr, i, j);
      }
    }
  }
  return arr;
}

let arr = [];
for (let i = 0; i < 100; i++) {
  arr.push(Math.floor(Math.random() * 100));
}
arr = [...new Set(arr)];
console.log("Unsorted Array");
console.log(arr, "\n\n");

let sortedArr = bubbleSort(arr);
console.log("Sorted Array");
console.log(sortedArr);
