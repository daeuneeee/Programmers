function solution(new_id) {
  // 1, 2단계
  let result = new_id.toLowerCase().match(/[a-z0-9\-\_\.]/g);

  // 3단계
  result = result.filter(
    (str, i) => str !== "." || (str === "." && result[i + 1] !== ".")
  );

  // 4단계
  if (result[0] === ".") result.shift();
  if (result[result.length - 1] === ".") result.pop();

  // 5단계
  if (result.length === 0) result.push("a");

  // 6단계
  result = result.slice(0, 15);
  if (result[result.length - 1] === ".") result.pop();

  // 7단계
  result = result.join("");
  if (result.length <= 2) {
    const tmp = result[result.length - 1].repeat(3 - result.length);
    result = result.concat(tmp);
  }

  return result;
}
