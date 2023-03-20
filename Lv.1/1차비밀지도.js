function solution(n, arr1, arr2) {
  const toStringArr1 = arr1.map((item) => item.toString(2).padStart(n, 0));
  const toStringArr2 = arr2.map((item) => item.toString(2).padStart(n, 0));
  const result = [];

  for (let i = 0; i < toStringArr1.length; i++) {
    const itemArr = [];
    for (let j = 0; j < toStringArr2.length; j++) {
      if (toStringArr1[i][j] + toStringArr2[i][j] > 0) itemArr.push("#");
      else itemArr.push(" ");
    }
    result.push(itemArr.join(""));
  }
  return result;
}
