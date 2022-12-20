function solution(numbers) {
  return numbers.reduce((acc, cur) => acc + cur) / numbers.length;
}

// reduce를 평소에 잘 안써보아서 써보았는데,,!
// console.log를 reduce 내부에서 찍으면 "Cannot read properties of undefined at functionTestReport" 라는 에러가 뜬다 ㅈ
