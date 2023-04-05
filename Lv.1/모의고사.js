const a = "12345";
const b = "21232425";
const c = "3311224455";

function solution(answers) {
  const repeatA = a.repeat(Math.ceil(answers.length / a.length));
  const repeatB = b.repeat(Math.ceil(answers.length / b.length));
  const repeatC = c.repeat(Math.ceil(answers.length / c.length));

  let aa = 0;
  let bb = 0;
  let cc = 0;

  let result = [];

  for (let i = 0; i < answers.length; i++) {
    if (Number(repeatA[i]) === answers[i]) aa++;
    if (Number(repeatB[i]) === answers[i]) bb++;
    if (Number(repeatC[i]) === answers[i]) cc++;
  }

  let highScore = Math.max(aa, bb, cc);
  if (highScore === aa) result.push(1);
  if (highScore === bb) result.push(2);
  if (highScore === cc) result.push(3);

  return result;
}
