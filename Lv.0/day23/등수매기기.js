function solution(score) {
  const average = score.map((el) => (el[0] + el[1]) / 2);
  const averageSort = [...average].sort((a, b) => b - a);
  return average.map((el) => averageSort.indexOf(el) + 1);
}
