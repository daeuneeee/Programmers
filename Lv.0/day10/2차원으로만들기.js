function solution(num_list, n) {
  let result = [];
  let start = 0;
  let end = n;
  for (let i = 0; i < num_list.length / n; i++) {
    result.push(num_list.slice(start, end));
    start += n;
    end += n;
  }
  return result;
}

// 나중에 splice 써서 다시풀어보기
