/**
 * Primality Test
 * It is done by iterating from 2 to n and checking whether n % i == 0
 */

// f(n) = n - 2 => O(n)
function primalityTest(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i * i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }

  return true;
}

// T(n) => O(√n)
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;

  if (n % 2 == 0 || n % 3 == 0) return false;

  for (let i = 5; i * i <= n; i += 6) {
    if (n % i == 0 || n % (i + 2) == 0) {
      return false;
    }
  }
  return true;
}


// T(n) => O(√n)
function primeFactors(n) {
  while (n % 2 == 0) {
    console.log(2);
    n = n / 2;
  }
  for (let i = 3; i * i <= n; i += 2) {
    while (n % i == 0) {
      console.log(i);
      n /= i;
    }
  }
  if (n > 2) {
    console.log(n);
  }
}

primeFactors(101);
