// 0 empty, 1 yellow 2 red

const board = [
  [2, 1, 1, 1, 2, 1, 2],
  [0, 1, 2, 1, 2, 1, 2],
  [0, 1, 1, 2, 2, 1, 2],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
]

function isGameOver(board) {
  let yellowScore = 0;
  let redScore = 0;
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] == 1) {
        yellowScore += 1;
        console.log(yellowScore);
      } else if (board[i][j] == 2) {
        redScore += 1;
        console.log(redScore);
      } else {
        console.log("empty slot");
      }
    }
  }
}

isGameOver(board);
