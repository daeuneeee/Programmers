function solution(n) {
  const temp = [];
  for (let i = 2; i <= n; i) {
    if (n % i === 0) {
      temp.push(i);
      n = n / i;
    } else {
      i++;
    }
  }
  const result = new Set(temp);
  return [...result];
}

// 마지막 증감식을 그냥 i로 줘도 되는지 의문
