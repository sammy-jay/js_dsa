function binarySearch(arr, value) {
  let low = 0,
    high = arr.length - 1,
    mid = null;
  while (low <= high) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] === value) {
      return mid;
    } else if (arr[mid] > value) {
      left = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}

const sortedArr = []
for (let i=1; i<=100;i++) sortedArr.push(i)

const index = binarySearch(sortedArr, 5);
console.log(index);
