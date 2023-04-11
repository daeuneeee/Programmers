function solution(k, score) {
  const ranking = [];
  const result = [];

  for (let i = 0; i < score.length; i++) {
    if (ranking.length === k) {
      ranking.splice(k - 1, 1, Math.max(Math.min(...ranking), score[i]));
      ranking.sort((a, b) => b - a);
      result.push(ranking[ranking.length - 1]);
    } else {
      ranking.push(score[i]);
      ranking.sort((a, b) => b - a);
      result.push(ranking[ranking.length - 1]);
    }
  }
  return result;
}
