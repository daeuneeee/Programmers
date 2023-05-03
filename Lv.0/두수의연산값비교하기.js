function solution(a, b) {
  const case1 = String(a) + b;
  const case2 = 2 * a * b;
  return Math.max(case1, case2);
}
