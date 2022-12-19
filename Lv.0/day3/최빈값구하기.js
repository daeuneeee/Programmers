function solution(array) {
  let count = {};
  for (const x of array) {
    count[x] = count[x] ? count[x] + 1 : 1;
  }
  let keyArr = Object.keys(count);
  let valueArr = Object.values(count);
  let maxValue = Math.max(...valueArr);
  let maxCount = 0;

  for (let i = 0; i < valueArr.length; i++) {
    if (valueArr[i] === maxValue) maxCount++;
  }
  return maxCount === 1 ? Number(keyArr[valueArr.indexOf(maxValue)]) : -1;
}

// 어후 너무 어려운데 왜 이게 0레벨인가요?
