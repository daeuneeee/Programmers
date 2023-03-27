function solution(t, p) {
  const arr = [];
  for (let i = 0; i < t.length - (p.length - 1); i++) {
    let tmp = "";
    for (let j = 0; j < p.length; j++) {
      tmp += t[i + j];
    }
    arr.push(tmp);
  }
  return arr.filter((el) => Number(el) <= Number(p)).length;
}

// 다음에 문자열 자르는 메서드 활용해서 접근해볼것
