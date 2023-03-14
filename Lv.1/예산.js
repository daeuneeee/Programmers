function solution(d, budget) {
  d = d.sort((a, b) => a - b);
  let result = 0;
  for (let i = 0; i < d.length; i++) {
    if (budget >= d[i]) {
      budget -= d[i];
      result++;
    }
  }
  return result;
}

// for문

function solution(d, budget) {
  d.sort((a, b) => a - b);
  let result = 0;

  let i = 0;
  if (d[0] > budget) return 0;
  while (budget >= d[i] + result) {
    result += d[i];
    i++;
  }
  return i;
}

// while문 너무어렵당
