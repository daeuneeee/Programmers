function solution(lines) {
  const arr = [];
  for (let x of lines) {
    for (let i = x[0]; i <= x[1]; i++) {
      if (arr[arr.length - 1] !== i && x[0] !== x[1]) arr.push(i);
    }
  }
  const tmp = arr.filter((el, i) => arr.indexOf(el) !== i);
  const result = [...new Set(tmp)];
  return result.length !== 0 ? result.length - 1 : 0;
}

// 처음 접근방식으로는 기존에 있던 테스트케이스만 통과하고 채점을 하게되면 1, 3, 9에 걸렸었다.
// 질문하기에서 힌트를 얻어 obj로 접근..

function solution(lines) {
  const obj = {};
  for (let x of lines) {
    for (let i = x[0]; i < x[1]; i++) {
      let key = String(i) + (i + 1);
      obj[key] = obj[key] ? 2 : 1;
    }
  }
  return Object.values(obj).filter((el) => el > 1).length;
}

// key별로 개수를 출력하는 방법을 기억해두면 좋을 것 같은데 쉽게 기억하지 못해서 비슷한 문제를 풀 때마다 인터넷에 찾아봐야 한다는 점...
