function solution(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      result.push(arr[i]);
    }
  }
  return result;
}

// i의 값끼리 비교해서 다를 경우에만 푸쉬

function solution(arr) {
  const result = [arr[0]];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== result[result.length - 1]) result.push(arr[i]);
  }
  return result;
}

// 결과 배열의 마지막 값과 들어올 i의 값을 비교해서 다를 경우에만 푸쉬
