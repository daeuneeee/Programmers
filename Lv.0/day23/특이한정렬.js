function solution(numlist, n) {
  numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n));

  const result = [];
  for (let i = 0; i < numlist.length; i++) {
    if (Math.abs(numlist[i] - n) === Math.abs(numlist[i + 1] - n)) {
      result.push(Math.max(numlist[i], numlist[i + 1]));
      result.push(Math.min(numlist[i], numlist[i + 1]));
      i++;
    } else {
      result.push(numlist[i]);
    }
  }
  return result;
}
