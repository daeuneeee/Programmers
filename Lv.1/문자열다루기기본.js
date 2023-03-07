function solution(s) {
  if ((s.length === 4 || s.length === 6) && !s.includes("e")) return !isNaN(s);
  else return false;
}

// 처음 푼 식

function solution(s) {
  if (s.length === 4 || s.length === 6)
    return s.match(/[^0-9]/) === null ? true : false;
  else return false;
}

// 두번째 정규식으로 푼 식
