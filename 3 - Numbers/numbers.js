/**
 * JavaScript represents all numbers as floats, that's why integer division does not work
 */

let div = 0.999;

console.log(div);

// Implementing Integer divisions
console.log(Math.floor(div));
console.log(Math.round(div));
console.log(Math.ceil(div));

// Number.EPSILON -> Returns the smallest interval between two representable numbers

function numberEqual(x, y) {
  return Math.abs(x - y) < Number.EPSILON;
}
console.log(Number.EPSILON);
console.log(numberEqual(0.1 + 0.2, 0.3));

x = Infinity
console.log(x)