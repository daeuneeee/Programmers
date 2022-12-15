function solution(n, m) {
  let divisorN = [];
  let divisorM = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) divisorN.push(i);
  }
  for (let i = 1; i <= m; i++) {
    if (m % i === 0) divisorM.push(i);
  }
  let gcd = divisorN.filter((num) => divisorM.includes(num)).slice(-1);
  gcd.push((n * m) / gcd);
  return gcd;
}
