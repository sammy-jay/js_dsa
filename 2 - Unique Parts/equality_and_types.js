/**
 * In JS, there are seven primitive data types: boolean, number, string, object, null, undefined, symbol.
 * ** function
 */

let is20 = false;
console.log(typeof is20); //boolean

let age = 19;
console.log(typeof age); // number

let lastName = "Soneye";
console.log(typeof lastName); // string

let names = ["Tolu", "Samuel", "Pelumi"];
console.log(typeof names); // object

let me = { firstName: "Tolulope", lastName: "Soneye", age: 19 };
console.log(typeof me); // object

let nullVar = null;
console.log(typeof nullVar); // null | object

let blank;
console.log(typeof blank); // undefined

function fn() {
  pass;
}
console.log(typeof fn); //function
