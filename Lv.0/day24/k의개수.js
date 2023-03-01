function solution(i, j, k) {
  let count = 0;
  for (let num = i; num <= j; num++) {
    String(num)
      .split("")
      .map((el) => {
        if (Number(el) === k) count++;
      });
  }
  return count;
}

// 전에 for문을 잘 쓰지 못했을 때에는 split 같은 메서드를 사용해서 값을 구해내기도 했는데 이제는 그런 생각이 잘 들지 않는다. 아쉬운부분
