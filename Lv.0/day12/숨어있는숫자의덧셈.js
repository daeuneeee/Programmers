const num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function solution(my_string) {
  let result = 0;
  my_string.split("").map((el) => {
    if (num.includes(el)) return (result += Number(el));
  });
  return result;
}
