function solution(denum1, num1, denum2, num2) {
  let result = [];
  result.push(num1 * denum2 + num2 * denum1);
  result.push(num1 * num2);
  let num = [];
  for (let i = 1; i <= result[1]; i++) {
    result[0] % i === 0 && result[1] % i === 0 ? num.push(i) : "";
  }
  return result.map((el) => el / num.slice(-1));
}
