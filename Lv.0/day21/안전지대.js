function solution(board) {
  let danger = [];
  const arr1 = [];
  for (let i = 0; i < board.length; i++) {
    const arr2 = [];
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        for (let k = j - 1; k <= j + 1; k++) {
          if (board[i][k] === 0) board[i][k] = 2;
        }
        arr2.push(j);
        danger = board[i];
      }
    }
    if (arr2.length > 0) arr1.push(i);
    board[arr1[0] - 1] = danger;
    board[arr1[0] + 1] = danger;
  }
  return board.flat().filter((el) => el === 0).length;
}

// 이 풀이방식은 완전히 테스트케이스만 통과할 수 있고 채점하게 되면 이제 결과에 불이나는,,, 그런 코드다 ㅎ 반례로 폭탄이 떨어져서 두군데에 있을 경우를 반영하지 못한다.

const xArr = [-1, 0, 1, 1, 1, 0, -1, -1];
const yArr = [1, 1, 1, 0, -1, -1, -1, 0];
function solution(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        let x = xArr.map((el) => i - el);
        let y = yArr.map((el) => j - el);
        for (let k = 0; k < 8; k++) {
          if (
            x[k] !== -1 &&
            x[k] < board.length &&
            y[k] !== -1 &&
            y[k] < board.length
          ) {
            if (board[x[k]][y[k]] !== 1) board[x[k]][y[k]] = 2;
          }
        }
      }
    }
  }
  return board.flat().filter((el) => el === 0).length;
}

// 1차 피드백 받아서 푼 것 (xArr, yArr) 설정해서 풀라는 힌트를 얻음

// const xArr = [-1, 0, 1, 1, 1, 0, -1, -1];
// const yArr = [1, 1, 1, 0, -1, -1, -1, 0];

function solution(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        for (let k = 0; k < 8; k++) {
          let x = i - xArr[k];
          let y = j - yArr[k];
          if (x >= 0 && x < board.length && y >= 0 && y < board.length) {
            if (board[x][y] !== 1) board[x][y] = 2;
          }
        }
      }
    }
  }
  return board.flat().filter((el) => el === 0).length;
}

// 2차 피드백 받아서 푼 것 굳이 map 메서드까지 사용하지 않아도 된다고 해서 빼고 푸는 방법을 생각해서 풀었다.
