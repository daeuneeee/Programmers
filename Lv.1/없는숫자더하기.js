function solution(numbers, sum = 0) {
  num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  for (let i = 0; i < num.length; i++) {
    !numbers.includes(num[i]) ? (sum += num[i]) : (sum += 0);
  }
  return sum;
}
