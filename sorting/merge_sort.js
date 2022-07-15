function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  } else {
    let mid = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid, arr.length);

    return merge(mergeSort(leftArr), mergeSort(rightArr));
  }
}

function merge(leftArr, rightArr) {
  let leftIndex = 0,
    rightIndex = 0;
  let result = [];
  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      result.push(leftArr[leftIndex]);
      leftIndex++;
    } else {
      result.push(rightArr[rightIndex]);
      rightIndex++;
    }
  }

  while (leftIndex < leftArr.length) {
    result.push(leftArr[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < rightArr.length) {
    result.push(rightArr[rightIndex]);
    rightIndex++;
  }

  return result;
}

let arr = [];
for (let i = 0; i < 100; i++) {
  arr.push(Math.floor(Math.random() * 100));
}
arr = [...new Set(arr)];
console.log("Unsorted Array");
console.log(arr, "\n\n");

let sortedArr = mergeSort(arr);
console.log("Sorted Array");
console.log(sortedArr);


