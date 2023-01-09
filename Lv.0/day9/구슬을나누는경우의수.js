function solution(balls, share) {
  let numerator = BigInt(1);
  let denominator = BigInt(1);
  for (let i = 1; i <= balls; i++) {
    numerator *= BigInt(i);
  }
  for (let i = 1; i <= balls - share; i++) {
    denominator *= BigInt(i);
  }
  for (let i = 1; i <= share; i++) {
    denominator *= BigInt(i);
  }
  return BigInt(numerator / denominator);
}
