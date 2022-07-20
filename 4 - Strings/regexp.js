const weirdStr =
  "This is a very weird string \n\t  well, i don't what im typing-though 12-12 = 0, This should be  \
right, yes \\  yup ()-[]-{}";

const n = weirdStr.search(/[(+]/);
// console.log(n);
// console.log(weirdStr.charAt(n));

// Commonly Used Regexes
// Immensely useful in validating users input in JS

// 5 most used
// 1. Any Numeric Characters
let reg = /\d+/;
console.log(reg.test("123"));
console.log(reg.test("my name is tolu"));
console.log(reg.test("44asdf"));

// 2. Only Numeric Characters
reg = /^\d+$/;
console.log(reg.test("test123"));
console.log(reg.test("123"));

// 3. Floating Numeric Characters
reg = /^\d+.\d+$/;
reg = /^[0-9]*.[0-9]*[1-9]+$/;
console.log(reg.test("1"));
console.log(reg.test("12.2"));
console.log(reg.test("12.000"));

// 4. Only Alphanumeric Characters
reg = /^[a-zA-Z0-9]+$/;
console.log(reg.test("somethingELSE"));
console.log(reg.test("112"));
console.log(reg.test("112aaa"));

// 5. Query String
reg = /([^?=&]+)(=([^&]*))/;

const uri =
  "http://yourdomain.com/product?category=4&product_id=2140&query=lcd+tv";
let queryString = {};

uri.replace(new RegExp("([^?=&]+)(=([^&]*))?", "g"), function ($0, $1, $2, $3) {
  queryString[$1] = $3;
});
console.log(queryString);