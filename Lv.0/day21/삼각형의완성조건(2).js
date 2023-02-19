function solution(sides) {
  let count = 0;
  sidesSort = sides.sort((a, b) => a - b);
  for (let i = sidesSort[1] - sidesSort[0] + 1; i <= sidesSort[1]; i++) {
    count++;
  }
  for (let i = sidesSort[1] + 1; i < sidesSort[0] + sidesSort[1]; i++) {
    count++;
  }
  return count;
}
