function solution(n) {
  let result = 1;
  let count = 0;
  for (let i = 1; i <= 10; i++) {
    if (result * i <= n) {
      result *= i;
      count++;
    }
  }
  return count;
}
