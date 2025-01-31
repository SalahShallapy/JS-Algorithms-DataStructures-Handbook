function totalNumberOfHalves(n) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += numberOfHalves(n);
  }
  return total;
}
