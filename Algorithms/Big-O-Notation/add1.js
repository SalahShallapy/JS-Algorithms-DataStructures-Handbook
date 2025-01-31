function addUpToFirst(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

// slower than add2 and have a O(2)
