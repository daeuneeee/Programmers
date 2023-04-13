function solution(lottos, win_nums) {
  const ranking = [6, 6, 5, 4, 3, 2, 1];

  const answer = lottos.filter((item) => win_nums.includes(item)).length;
  const zero = answer + lottos.filter((item) => item === 0).length;

  return [ranking[zero], ranking[answer]];
}
