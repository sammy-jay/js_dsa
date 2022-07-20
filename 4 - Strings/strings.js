// String Access
let str1 = "Tolulope";
console.log(str1.charAt(3));

console.log(str1.substring(1, 10));

// String Comparison
let a = "a";
let b = "b";

console.log(a < b);
console.log("add" < "aba");

console.log("a" < "A");

let str2 = "azAZ";

console.log(str2.charCodeAt(0));
console.log(str2.charCodeAt(1));
console.log(str2.charCodeAt(2));
console.log(str2.charCodeAt(3));

// String Searching
let str3 = "          This is a long string";
console.log(str3)
console.log(str3.indexOf(" "));
console.log(str3.includes("this"));
console.log(str3.endsWith("ng"));

// String Decompostion
console.log(str3.trim().split(" "));
