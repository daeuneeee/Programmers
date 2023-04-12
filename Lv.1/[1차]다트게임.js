function solution(dartResult) {
  const bonus = ["S", "D", "T"];
  let tmp = "0";
  const tmpArr = [];

  for (let i = 0; i < dartResult.length; i++) {
    if (bonus.indexOf(dartResult[i]) !== -1) {
      tmpArr.push(Math.pow(tmp, bonus.indexOf(dartResult[i]) + 1));
      tmp = "0";
    } else {
      if (dartResult[i] === "*" || dartResult[i] === "#")
        tmpArr.push(dartResult[i]);
      else tmp += dartResult[i];
    }
  }

  while (tmpArr.indexOf("*") !== -1 || tmpArr.indexOf("#") !== -1) {
    if (tmpArr.indexOf("#") !== -1) {
      tmpArr[tmpArr.indexOf("#") - 1] = tmpArr[tmpArr.indexOf("#") - 1] * -1;
      tmpArr.splice(tmpArr.indexOf("#"), 1);
    }
    if (tmpArr.indexOf("*") !== -1) {
      tmpArr[tmpArr.indexOf("*") - 2] = tmpArr[tmpArr.indexOf("*") - 2] * 2;
      tmpArr[tmpArr.indexOf("*") - 1] = tmpArr[tmpArr.indexOf("*") - 1] * 2;
      tmpArr.splice(tmpArr.indexOf("*"), 1);
    }
  }
  return tmpArr.reduce((acc, cur) => acc + cur);
}
