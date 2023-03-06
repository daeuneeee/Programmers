const list = ["aya", "ye", "woo", "ma"];

function solution(babbling) {
  const arr = [];
  let count = 0;

  for (let i = 0; i < list.length; i++) {
    arr.push(list[i]);
    for (let j = 0; j < list.length; j++) {
      arr.push(list[i] + list[j]);
      for (let k = 0; k < list.length; k++) {
        arr.push(list[i] + list[j] + list[k]);
        for (let l = 0; l < list.length; l++) {
          arr.push(list[i] + list[j] + list[k] + list[l]);
        }
      }
    }
  }
  for (let i = 0; i < babbling.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (babbling[i] === arr[j]) count++;
    }
  }
  return count;
}

// 처음 푼 방식인데 for문으로 가능한 경우의 수를 전부 추가해주고 또 for문으로 두 배열을 비교해서 같은 값이 있을 경우에 count를 추가해주는 방식이였다.
// 그러다보니 시간도 오래걸리고 전체 배열을 처음부터 끝까지 탐색(?)해야해서 비효율적이라고 생각했다.

function solution(babbling) {
  let count = 0;

  for (let v = 0; v < babbling.length; v++) {
    for (let i = 0; i < list.length; i++) {
      if (babbling[v] === list[i]) count++;
      for (let j = 0; j < list.length; j++) {
        if (babbling[v] === list[i] + list[j]) count++;
        for (let k = 0; k < list.length; k++) {
          if (babbling[v] === list[i] + list[j] + list[k]) count++;
          for (let l = 0; l < list.length; l++) {
            if (babbling[v] === list[i] + list[j] + list[k] + list[l]) count++;
          }
        }
      }
    }
  }
  return count;
}

// 다시 푼 방식인데 해당 코드에는 arr라는 변수가 일단 필요 없어지고 for문을 돌릴 때 마다 같은 값이 있으면 바로바로 count를 추가해주었다.
// 지금 방식도 for문이 많이돌아가서 비효율적이라고 생각하지만.. 좀더 고민해보고 리팩토링할 필요가 있디고 생각한다.
