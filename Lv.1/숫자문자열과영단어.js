const numbers = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function solution(s) {
  let result = "";
  for (let i = 0; i < numbers.length; i++) {
    s = s.replaceAll(numbers[i], i);
  }
  return Number(s);
}
