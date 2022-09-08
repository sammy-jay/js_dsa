/**
 * Problem 1
 * Given the array arr, find and return two indices of the array that add up or return -1 if there is no combination that adds up to the target.
 */

arr = [2, 4, 1, 23, 4, 5, 7, 54];
target = 7;

// f(n) = n * (n - 1), T => O(n²), S => O(1)
function findSum(arr, target) {
  if (arr.length < 2) return -1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        return [i, j];
      }
    }
  }
  return -1;
}

// f(n) = n, T => O(n), S => O(n)
function findSum2(arr, target) {
  let hashTable = {};
  for (let i = 0; i < arr.length; i++) {
    current = arr[i];
    diff = target - current;

    if (hashTable[current] != undefined) {
      console.log(hashTable);
      return [i, hashTable[current]];
    } else {
      hashTable[diff] = i;
    }
  }
  return -1;
}

const result = findSum2(arr, target);
// console.log(result);

/**
 * Problem 2
 * Implement the array.slice() function from scratch
 */

function arraySlice(array, start, stop, step = 1) {
  if (!start && !stop) {
    return array;
  }
  if (!stop) stop = array.length;

  let partArray = [];

  for (let i = start; i < stop; i += step) {
    partArray.push(array[i]);
  }
  return partArray;
}

const pArr = arraySlice(arr, 3, 7, 2);
console.log(pArr);
