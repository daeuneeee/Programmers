function solution(arr1, arr2) {
  answer = [];
  for (let i = 0; i < arr1.length; i++) {
    result = [];
    for (let j = 0; j < arr1[i].length; j++) {
      result.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(result);
  }
  return answer;
}

function solution(arr1, arr2) {
  const result = new Array(arr1.length)
    .fill(0)
    .map(() => new Array(arr1[0].length).fill(0));

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[i].length; j++) {
      result[i][j] = arr1[i][j] + arr2[i][j];
    }
  }
  return result;
}

// 이중 빈배열을 메서드를 사용해서 만들고 그 안에 값을 넣어주는 방식으로 풀었다.
