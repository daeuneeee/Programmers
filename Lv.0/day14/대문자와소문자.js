const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(my_string) {
  let result = "";
  for (let i = 0; i < my_string.split("").length; i++) {
    if (lower.split("").includes(my_string[i]))
      result += my_string[i].toUpperCase();
    else result += my_string[i].toLowerCase();
  }
  return result;
}
