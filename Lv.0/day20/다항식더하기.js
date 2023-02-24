function solution(polynomial) {
  const arr = polynomial.split("+");
  let x = 0;
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("x")) {
      if (isNaN(parseInt(arr[i]))) {
        x += 1;
      } else {
        x += parseInt(arr[i]);
      }
    } else {
      num += Number(arr[i]);
    }
  }
  if (x === 1) x = "x";
  else x = `${x}x`;
  if (num === 0 && x === "0x") return 0;
  else if (num === 0 && x === x) return x;
  else if (num !== 0 && x === "0x") return String(num);
  else return `${x} + ${num}`;
}
