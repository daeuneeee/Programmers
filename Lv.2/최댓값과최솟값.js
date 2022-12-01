function solution(s) {
  splitS = s.split(" ").sort((a, b) => a - b);
  return splitS[0] + " " + splitS[splitS.length - 1];
}
