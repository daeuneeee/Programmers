function solution(common) {
  const idx0 = common[0];
  const idx1 = common[1];
  const idx2 = common[2];

  return idx1 - idx0 === idx2 - idx1
    ? common.pop() + (idx1 - idx0)
    : common.pop() * (idx1 / idx0);
}
