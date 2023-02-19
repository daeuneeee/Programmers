function solution(s) {
  const count = {};
  for (const v of s) {
    count[v] = count[v] ? count[v] + 1 : 1;
  }
  const keys = Object.keys(count);
  const key = keys.filter((key) => count[key] === 1);
  key.sort();
  return key.join("");
}
