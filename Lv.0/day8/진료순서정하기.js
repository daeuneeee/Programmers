function solution(emergency) {
  // const result = new Array(emergency.length);
  let sortEmergency = [...emergency];
  sortEmergency = sortEmergency.sort((a, b) => b - a);
  for (let i = 0; i < emergency.length; i++) {
    for (let j = 0; j < sortEmergency.length; j++) {
      if (emergency[i] === sortEmergency[j]) {
        // result[i] = j + 1;
        emergency[i] = j + 1;
        break;
      }
    }
  }
  // console.log(result)
  return emergency;
}

// break가 없으면 테스트케이스2가 이상하게 출력된다. 근데 왜인지 알 수 없다.
// result라는 빈배열을 만들어주고 출력하면 break가 필요없다,, 비슷한 코드인 것 같은데 왜일까..?
