function solution(n) {
  answer = "";
  result = [];
  n = String(n);
  for (let i = 0; i < n.length; i++) {
    result.push(n[i]);
  }
  result.sort((a, b) => b - a);

  for (let j = 0; j < result.length; j++) {
    answer += result[j];
  }
  return Number(answer);
}
