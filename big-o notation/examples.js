// Linear Time Complexity - O(n)
function exampleLinear(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

// Quadratic Time Complexity - O(n²)
function exampleQuadratic(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}

// Cubic Time Complexity - O(n³)
function exampleCubic(n) {
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      for (let k = j; k < n; k++) {
        console.log(i, j, k);
      }
    }
  }
}

// Logarithmic Time Complexity - O(log n)
function exampleLogarithmic(n) {
  for (let i = 2; i <= n; i *= 2) {
    console.log(i);
  }
}


