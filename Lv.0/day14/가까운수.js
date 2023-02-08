function solution(array, n) {
  const absArr = array.sort((a, b) => a - b).map((el) => Math.abs(el - n));
  return array[absArr.indexOf(Math.min(...absArr))];
}
