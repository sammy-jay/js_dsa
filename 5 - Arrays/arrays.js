let arr = [1, 2, 3, 4];

// Insertion
arr.push(5);
arr.push(6);

arr.unshift(0);
arr.unshift(-1);
console.log(arr);

// Deletion
arr.pop();
arr.pop();

arr.shift();
arr.shift();
console.log(arr);

// Access
console.log(arr[0]);
console.log(arr[arr.length - 1]);
console.log();

// Iteration
for (let i = 0; i < arr.length; i++) console.log(arr[i]);
console.log();

for (let i of arr) console.log(i);
console.log();

for (let i in arr) console.log(i);
console.log();

arr.forEach((el) => console.log(el));

const arr2 = Array(5);
arr2[0] = 0;
arr2[1] = 2;
arr2[2] = 4;
arr2[3] = 6;
arr2[4] = 8;
Object.freeze(arr2);
arr2[5] = 10;

console.log(arr2);
console.log();

// More methods
let arr3 = arr.concat(arr2);
console.log(arr3.length);
console.log(...arr3);

console.log(arr3.slice(1, 3));
console.log(arr3.splice(1, 3));
