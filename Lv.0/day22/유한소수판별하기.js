const primeFactor = [2, 5];

function solution(a, b) {
  for (let i = 2; i <= a; i++) {
    if (a % i === 0 && b % i === 0) {
      a = a / i;
      b = b / i;
    }
  }
  const num = [];
  for (let i = 2; i <= b; i) {
    if (b % i === 0) {
      num.push(i);
      b = b / i;
    } else {
      i++;
    }
  }
  const result = num.map((el) => primeFactor.includes(el));
  return result.includes(false) ? 2 : 1;
}
