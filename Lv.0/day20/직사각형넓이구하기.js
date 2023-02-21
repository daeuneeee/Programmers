function solution(dots) {
  let num = [];
  for (let x of dots) {
    for (let i = 0; i < x.length; i++) {
      x = x[0] + x[1];
    }
    num.push(x);
  }
  const maxIdx = num.indexOf(Math.max(...num));
  const minIdx = num.indexOf(Math.min(...num));
  return (
    (dots[maxIdx][0] - dots[minIdx][0]) * (dots[maxIdx][1] - dots[minIdx][1])
  );
}
