function solution(number, limit, power) {
  const list = [];

  for (let i = 1; i <= number; i++) {
    let tmp = 0;

    for (let j = 1; j * j <= i; j++) {
      if (j * j === i) tmp++;
      else if (i % j === 0) tmp += 2;
    }

    list.push(tmp);
  }

  const result = list.map((el) => {
    if (el > limit) return Number(String(el).replace(el, power));
    else return el;
  });

  return result.reduce((acc, cur) => acc + cur);
}
