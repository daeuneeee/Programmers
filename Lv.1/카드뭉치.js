// 실패 1
function solution(cards1, cards2, goal) {
  if (cards1.length + cards2.length !== goal.length) return "No";

  const cards1Idx = cards1.map((el) => goal.indexOf(el));
  const cards2Idx = cards2.map((el) => goal.indexOf(el));
  let result = false;

  for (
    let i = 0;
    i < Math.max(cards1Idx.length - 1, cards2Idx.length - 1);
    i++
  ) {
    if (cards1Idx[i] > cards1Idx[i + 1] || cards2Idx[i] > cards2Idx[i + 1])
      result = true;
  }

  return result ? "No" : "Yes";
}

// 처음에 짠 코드로 배열의 순서를 비교해서 순서가 다르면 false 출력되도록 코딩
// 테스트 케이스 20,21,24 실패

// 실패 2
function solution(cards1, cards2, goal) {
  let result = true;
  if (cards1.length + cards2.length > goal.length) result = false;

  for (let i = goal.length - 1; i >= 0; i--) {
    if (goal[i] === cards1[cards1.length - 1]) cards1.pop();
    else if (goal[i] === cards2[cards2.length - 1]) cards2.pop();
    else result = false;
  }

  return result ? "Yes" : "No";
}

// 다음으로 짠 코드로 뒤에서 하나씩 비교해주면서 조건문 틀리면 false 출력되도록 코딩
// 위와 마찬가지로 테스트 케이스 20.21,24 실패

// 성공(for...of)
function solution(cards1, cards2, goal) {
  for (let i of goal) {
    if (cards1.indexOf(i) === 0) cards1.shift();
    else if (cards2.indexOf(i) === 0) cards2.shift();
    else return "No";
  }

  return "Yes";
}

// 앞부터 비교해주면서 조건문 틀리면 false 출력

// 성공(for문)
function solution(cards1, cards2, goal) {
  for (let i = 0; i < goal.length; i++) {
    if (goal[i] === cards1[0]) cards1.shift();
    else if (goal[i] === cards2[0]) cards2.shift();
    else return "No";
  }

  return "Yes";
}

// 앞부터 비교해주면서 조건문 틀리면 false 출력
