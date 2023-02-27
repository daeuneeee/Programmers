function solution(num, total) {
  const result = [];
  let base = 0;
  if (num % 2 !== 0) base = total / num;
  else base = Math.ceil(total / num);

  for (
    let i = base - Math.floor(num / 2);
    i <= base + Math.floor(num / 2);
    i++
  ) {
    result.push(i);
  }

  if (num % 2 !== 0) {
    return result;
  } else {
    result.pop();
    return result;
  }
}
