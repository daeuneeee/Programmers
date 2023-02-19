function solution(my_string, num1, num2) {
  const str = my_string.split("");
  const removed = str.splice(num1, 1);
  const removed2 = str.splice(num2 - 1, 1);
  str.splice(num1, 0, ...removed2);
  str.splice(num2, 0, ...removed);
  return str.join("");

  // my_string = my_string.split("");
  // [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
  // return my_string.join("");
}

// 구조분해할당 응용해서 풀어보기
