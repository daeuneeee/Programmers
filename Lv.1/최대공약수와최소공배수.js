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

// 최대공약수 먼저 구해서 풀기

function solution(n, m) {
  const max = Math.max(n, m);
  const min = Math.min(n, m);
  let x = 0;

  for (let i = max; i <= n * m; i += max) {
    if (i % min === 0) {
      x += i;
      break;
    }
  }
  return [(n * m) / x, x];
}

// 이번엔 최소공배수를 먼저 구해서 풀어봤지롱요 다음엔 While문 써서 풀어보는게 목표
