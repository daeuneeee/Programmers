function solution(absolutes, signs, answer = 0) {
  for (let i = 0; i < absolutes.length; i++) {
    for (let j = 0; j < signs.length; j++) {
      if (i === j) {
        if (signs[j]) {
          answer += absolutes[i];
        } else {
          answer -= absolutes[i];
        }
      }
    }
  }
  return answer;
}

function solution(absolutes, signs, answer = 0) {
  let result = absolutes.map((el, i) => (signs[i] ? el : -el));
  for (let i = 0; i < result.length; i++) {
    answer += result[i];
  }
  return answer;
}
