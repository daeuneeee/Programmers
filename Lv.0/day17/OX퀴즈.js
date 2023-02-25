function solution(quiz) {
  const result = [];
  for (let x of quiz) {
    const xArr = x.split(" ");
    let tmp = 0;
    for (let i = 0; i < xArr.length; i++) {
      if (xArr[i] === "-") {
        tmp = xArr[i - 1] - xArr[i + 1];
      } else if (xArr[i] === "+") {
        tmp = Number(xArr[i - 1]) + Number(xArr[i + 1]);
      }
    }
    if (Number(xArr[xArr.length - 1]) === Number(tmp)) result.push("O");
    else result.push("X");
  }
  return result;
}
