let alphabets = "abcdefghijklmnopqrstuvwxyz";

function solution(s, skip, index) {
  alphabets = alphabets.split("").filter((el) => !skip.includes(el));

  let result = "";
  for (let i = 0; i < s.length; i++) {
    if (alphabets.indexOf(s[i]) + index >= alphabets.length) {
      result += alphabets[(alphabets.indexOf(s[i]) + index) % alphabets.length];
    } else {
      result += alphabets[alphabets.indexOf(s[i]) + index];
    }
  }

  return result;
}
