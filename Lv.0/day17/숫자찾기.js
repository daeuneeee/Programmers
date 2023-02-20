function solution(num, k) {
  const result = String(num).split("").indexOf(String(k));
  return result === -1 ? -1 : result + 1;
}
