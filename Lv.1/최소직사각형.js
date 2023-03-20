function solution(sizes) {
  sizes.map((card) => card.sort((a, b) => a - b));
  return (
    Math.max(...sizes.map((card) => card[0])) *
    Math.max(...sizes.map((card) => card[1]))
  );
}
