function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

const sortedArr = [];
for (let i = 1; i <= 100; i++) sortedArr.push(i);

const index = linearSearch(sortedArr, 57);
console.log(index);
