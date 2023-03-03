function solution(dots) {
  dots.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });
  const tmp1 = [];
  const tmp2 = [];
  for (let i = 1; i >= 0; i--) {
    tmp1.push(dots[0][i] - dots[1][i]);
    tmp2.push(dots[2][i] - dots[3][i]);
  }
  if (tmp1[0] / tmp1[1] === tmp2[0] / tmp2[1]) return 1;
  else {
    for (let i = 1; i >= 0; i--) {
      tmp1.push(dots[0][i] - dots[2][i]);
      tmp2.push(dots[1][i] - dots[3][i]);
    }
  }
  if (tmp1[0] / tmp1[1] === tmp2[0] / tmp2[1]) return 1;
  else {
    for (let i = 1; i >= 0; i--) {
      tmp1.push(dots[1][i] - dots[2][i]);
      tmp2.push(dots[0][i] - dots[3][i]);
    }
  }
  if (tmp1[0] / tmp1[1] === tmp2[0] / tmp2[1]) return 1;
  else return 0;
}
