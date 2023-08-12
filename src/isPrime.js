const isPrime = (item) => {
  for (let j = 2, s = Math.sqrt(item); j <= s; j += 1) {
    if (item % j === 0) return false;
  }
  return item > 1;
};
export default isPrime;
