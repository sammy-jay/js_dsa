/** 
 * Big-O is important for analyzing and comparing the efficiencies of algorithms.
 * The analysis of Big-O starts by looking at the code and applying the rules to simplify the Big-O.
 * Below are the most often used rules
 */


// Coefficient Rule: "Get Rid of Constants"

// f(n) = n => O(n)
function a(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += 1;
  }
  return count;
}

// f(n) = 5n => O(n)
function b(n) {
  let count = 0;
  for (let i = 0; i < 5 * n; i++) {
    count += 1;
  }
  return count;
}

// f(n) = 5n + 1 => O(n)
function c(n) {
  let count = 0;
  for (let i = 0; i < 5 * n; i++) {
    count += 1;
  }
  count += n;
  return count;
}

// Sum Rule: "Add Big-Os Up"

// f(n) = n + 5n => O(n)
function d(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += 1;
  }
  for (let i = 0; i < 5 * n; i++) {
    count += 1;
  }
  return count;
}

// Product Rule: "Multiply Big-Os"

// f(n) = n * 5n = 5n² => O(n)
function e(n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 5 * n; j++) {
      console.log(i, j);
      count += 1;
    }
  }
  return count;
}

// Polynomial Rule: "Big-O to the Power of k"

// f(n) = n² => O(n²)
function f(n) {
  let count = 0;
  // line 66 runs n*n iterations
  for (let i = 0; i < n * n; i++) {
    count += 1;
  }
  return count;
}
console.log(f(3));
