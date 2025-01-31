function logAllBinaries(n) {
  let count = 0;
  let lastNum = "1".repeat(n);
  while (count.toString(2) !== lastNum) {
    console.log(count.toString(2).padStart(n, "0"));
    count++;
  }
  console.log(lastNum);
}

// O(log n)
