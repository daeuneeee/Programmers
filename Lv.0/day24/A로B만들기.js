function solution(before, after) {
  let length = 0;
  const b = before.split("").sort();
  const a = after.split("").sort();
  for (let i = 0; i < b.length; i++) {
    if (b[i] === a[i]) length++;
  }
  return length === before.length ? 1 : 0;
}

// 더 쉽게 풀 수 있는 방법이 있었는데 떠올리지 못해서 분하다..
