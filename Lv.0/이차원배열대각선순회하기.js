function solution(board, k) {
  let result = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (i + j <= k) result += board[i][j];
    }
  }

  return result;
}

function solution(board, k) {
  let result = 0;

  board.map((el, i) =>
    el.map((el2, j) => {
      if (i + j <= k) result += board[i][j];
    })
  );

  return result;
}
