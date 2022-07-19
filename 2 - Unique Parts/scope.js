/**
 * Global Scope
 * - This variables are declared without any operators
 * - Avoid doing this at all costs
 */

test = "Test123";
console.log(test);

/**
 * Functional Scope
 * - This variables are declared with the var keyword
 * - This causes variable hoisting i.e using variables before they are used
 */

function scope1() {
  var top = "top";
  bottom = "bottom";
  console.log(bottom);

  var bottom;
}

scope1();

top = "top";
function scope2() {
  console.log(top);
}

var top;
scope2();

var middle = "middle";
function scope3() {
  console.log(middle);
}

scope3();

function scope4() {
  if (1 == 1) {
    var insideIf = "insideIf";
  }
  console.log(insideIf);
}

scope4();

var outside = "ouside";
function scope5() {
  if (true) {
    console.log(outside);
  }
}
scope5();

function scope6() {
  function inner() {
    var innerVar = "inner";
  }
  //   console.log(innerVar);
}
scope6();

/**
 * Block Scope
 * - This variables are declared with the let keyword
 * - Any variable declared this way is in the closest block scope (meaning the {} it is declared in)
 */

function scope7() {
  if (true) {
    const blockScope = "blockScope";
    let blockScope2 = "blockScope";
  }
  //   console.log(blockScope); => error
}

scope7();

let myName = "tolu";
function scope8() {
  if (true) {
    console.log(myName)
  }
}

scope8();
