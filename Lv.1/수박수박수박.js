function solution(n) {
  answer = "";
  word = Array(n).fill("수박").join("");
  for (let i = 0; i < n; i++) {
    answer += word[i];
  }
  return answer;
}
