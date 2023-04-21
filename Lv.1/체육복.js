function solution(n, lost, reserve) {
  let result =
    n - lost.length + lost.filter((el) => reserve.includes(el)).length;

  const lostCopy = [...lost];
  lost = lost.sort((a, b) => a - b).filter((el) => !reserve.includes(el));
  reserve = reserve
    .sort((a, b) => a - b)
    .filter((el) => !lostCopy.includes(el));

  for (let i = 0; i < lost.length; i++) {
    if (reserve.indexOf(lost[i] - 1) !== -1) {
      reserve.splice(reserve.indexOf(lost[i] - 1), 1);
      result++;
    } else if (reserve.indexOf(lost[i]) !== -1) {
      reserve.splice(reserve.indexOf(lost[i]), 1);
      result++;
    } else if (reserve.indexOf(lost[i] + 1) !== -1) {
      reserve.splice(reserve.indexOf(lost[i] + 1), 1);
      result++;
    }
  }
  return result;
}
