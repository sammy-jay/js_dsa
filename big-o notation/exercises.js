// 1. f(n) = 1000n * 20n = 20000n² => O(n²)
function someFunction(n) {
  for (let i = 0; i < n * 1000; i++) {
    for (let j = 0; i < n * 20; j++) {
      console.log(i + j);
    }
  }
}

// 2. f(n) = n * n * n * 10 = 10n³ => O(n³)
function someFunction(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        for (let l = 0; l < 10; l++) {
          console.log(i + j + k + l);
        }
      }
    }
  }
}

// 3. f(n) = 1000 => O(1)
function someFunction(n) {
  for (let i = 0; i < 1000; i++) {
    console.log(i);
  }
}

// 4. f(n) = 10n => O(n)
function someFunction(n) {
  for (let i = 0; i < n * 10; i++) {
    console.log(n);
  }
}

// 5. f(n) = => O(log n)
function someFunction(n) {
  // i doubles each iteration
  for (let i = 0; i < n; i * 2) {
    console.log(i);
  }
}

// 6. f(n) = ∞ => O(∞)
function someFunction(n) {
  while (true) {
    console.log(n);
  }
}
