function solution(array) {
  let count = 0;
  for (x of array) {
    for (let i = 0; i < String(x).split("").length; i++) {
      if (String(x).split("")[i].includes("7")) count++;
    }
  }
  return count;
}

function solution(array) {
  return array
    .join("")
    .split("")
    .filter((el) => el.includes("7")).length;
}
