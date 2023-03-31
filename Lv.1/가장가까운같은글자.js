function solution(s) {
  let tmp = "";
  let result = [];
  for (let i = 0; i < s.length; i++) {
    if (tmp.lastIndexOf(s[i]) === -1) result.push(tmp.lastIndexOf(s[i]));
    else result.push(tmp.length - tmp.lastIndexOf(s[i]));
    tmp += s[i];
  }
  return result;
}
