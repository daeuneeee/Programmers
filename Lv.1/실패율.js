function solution(N, stages) {
  stages.sort((a, b) => a - b);
  const tmp = [];
  let total = stages.length;

  for (let i = 1; i <= N; i++) {
    const length = stages.slice(
      stages.indexOf(i),
      stages.lastIndexOf(i) + 1
    ).length;
    if (length === 0) tmp.push(0);
    else tmp.push(length / total);
    total -= length;
  }

  const result = [];

  for (let i = 0; i < tmp.length; i++) {
    result.push(tmp.indexOf(Math.max(...tmp)) + 1);
    tmp[tmp.indexOf(Math.max(...tmp))] = -1;
  }
  return result;
}
