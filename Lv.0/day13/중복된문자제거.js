function solution(my_string) {
  const set = new Set(my_string.split(""));
  return [...set].join("");
}
