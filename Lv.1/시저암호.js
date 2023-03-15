function solution(s, n) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      result += " ";
      continue;
    }

    let tmp = s.charCodeAt(i) + n;

    if (tmp > 122 || (tmp > 90 && tmp - n < 97)) tmp -= 26;
    console.log(tmp);
    result += String.fromCharCode(tmp);
  }
  return result;
}
