function solution(k, m, score) {
  const sort = score.sort((a, b) => b - a);
  let result = 0;

  for (let i = 1; i <= sort.length / m; i++) {
    result += sort[m * i - 1] * m;
  }
  return result;
}
