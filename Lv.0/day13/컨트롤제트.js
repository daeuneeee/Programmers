function solution(s) {
  let result = 0;
  const str = s.split(" ");

  for (let i = 0; i < str.length; i++) {
    if (isNaN(Number(str[i]))) result -= Number(str[i - 1]);
    else result += Number(str[i]);
  }
  return result;
}
