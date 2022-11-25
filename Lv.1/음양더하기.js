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
