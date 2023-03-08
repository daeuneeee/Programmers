function solution(price, money, count) {
  let result = 0;
  for (let i = 1; i <= count; i++) {
    result += price * i;
  }
  return result - money > 0 ? result - money : 0;
}

// 두번 풀었는데도 같은 식으로 풀었다. 진짜 토씨 하나 안틀리고... 다음엔 가우스의 공식을 이용해서 풀어보자!
