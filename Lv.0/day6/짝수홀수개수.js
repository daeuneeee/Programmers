function solution(num_list) {
  let even = 0;
  let odd = 0;
  for (let i = 0; i <= num_list.length - 1; i++) {
    num_list[i] % 2 === 0 ? even++ : odd++;
  }
  return [even, odd];
}

function solution(num_list) {
  let even = 0;
  let odd = 0;

  num_list.map((el) => (el % 2 === 0 ? even++ : odd++));
  return [even, odd];
}

// for문으로 풀고, map으로도 풀 수 있을 것 같아서 해봤는데 생각보다 쉽게 풀렸다.! 야홍~
