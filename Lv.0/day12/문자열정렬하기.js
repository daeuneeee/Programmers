const num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function solution(my_string) {
  const result = [];
  my_string.split("").map((el) => {
    if (num.includes(el)) result.push(Number(el));
  });
  return result.sort();
}

// 왜 filter를 사용해서 걸러줄 때 Number를 사용하면 안먹히는지 모르겠다..
// 지금 당장으로는 filter 사용해서는 나온 결과를 for문으로 돌려서 새로운 배열에 push 해주는 방법밖에 떠오르지 않는다.
