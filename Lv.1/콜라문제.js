function solution(a, b, n) {
  let result = 0;
  while (n >= a) {
    let newCoke = Math.floor(n / a);
    n = n - newCoke * a + newCoke * b;
    result += newCoke * b;
  }
  return result;
}
