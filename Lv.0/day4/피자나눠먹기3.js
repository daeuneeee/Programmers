function solution(slice, n) {
  for (let i = 1; i <= n; i++) {
    if ((slice * i) / n >= 1) {
      return i;
    }
  }
}

// 피자나눠먹기1은 저렇게 쉽게 풀어놓고 이건 왜 이렇게 풀었을까.?ㅎ
