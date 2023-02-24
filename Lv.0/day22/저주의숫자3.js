function solution(n) {
  const result = [];
  for (let i = 1; i <= n * 3; i++) {
    if (i % 3 !== 0 && !String(i).includes(3)) result.push(i);
  }
  return result[n - 1];
}
