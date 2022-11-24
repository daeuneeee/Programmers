function solution(num, count = 0) {
  if (num === 1) return 0;

  for (let i = 1; i <= 500; i++) {
    if (num % 2 === 0) {
      count++;
      num /= 2;
      if (num === 1) return count > 500 ? -1 : count++;
    }
    if (num % 2 === 1) {
      count++;
      num = num * 3 + 1;
      if (num === 1) return count > 500 ? -1 : count++;
    }
  }
}
