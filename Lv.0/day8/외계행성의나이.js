// prettier-ignore
const arr = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function solution(age) {
  ageArr = String(age).split("");
  result = "";
  for (let i = 0; i <= ageArr.length - 1; i++) {
    result += arr[ageArr[i]];
  }
  return result;
}
