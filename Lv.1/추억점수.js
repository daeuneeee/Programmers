function solution(name, yearning, photo) {
  const info = {};
  yearning.map((el, i) => (info[name[i]] = el));
  const result = [];

  for (let x of photo) {
    result.push(
      x
        .map((el) => info[el])
        .filter((el) => el !== undefined)
        .reduce((acc, cur) => acc + cur, 0)
    );
  }
  return result;
}
