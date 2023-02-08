const num = ["3", "6", "9"];

function solution(order) {
  let result = String(order)
    .split("")
    .filter((el) => num.includes(el));
  return result.length;
}

// 다른 풀이방법 중 정규식(/[369]/)을 이용하여 푼 방법이 있는데 정말 신선했다.
// 다음 비슷한 문제에선 활용해보자!
