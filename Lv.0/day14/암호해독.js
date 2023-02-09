function solution(cipher, code) {
  let result = "";
  const arr = cipher.split("");
  for (let i = 0; i < arr.length; i++) {
    if (Number(i + 1) % code === 0) {
      result += arr[i];
    }
  }
  return result;
}
