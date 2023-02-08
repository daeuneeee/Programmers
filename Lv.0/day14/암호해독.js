function solution(cipher, code) {
  let result = "";
  const arr = cipher.split("");
  for (let i = 0; i <= arr.length - 1; i++) {
    if (Number(i + 1) % code === 0) {
      result += arr[i];
    }
  }
  return result;
}

// 테스트케이스 1,2,6,7,8에 통과하지 못해서 질문하기를 보고 테스트케이스를 추가했더니 이유를 알 수 있었다.
// 추가한 테스트케이스 -> "abc", 1  => "abc"
// 문제는 code가 1일 경우 arr.length만큼 돌려주면 한번 더 돌아서 undefined가 추가된다는 것이었다.
