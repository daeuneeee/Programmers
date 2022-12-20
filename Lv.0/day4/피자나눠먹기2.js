function solution(n) {
  for (let i = 1; i <= 6; i++) {
    if ((i * n) % 6 === 0) {
      return (i * n) / 6;
    }
  }
}
