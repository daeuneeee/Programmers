const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  let result = "";
  // console.log(Number(input[0]));
  for (let i = 1; i <= Number(input[0]); i++) {
    result += "*".repeat(i) + "\n";
  }
  console.log(result);
});

// 가끔 이런식으로 나오는 문제가 있는데 왜 이렇게 내는지 의문이다..
