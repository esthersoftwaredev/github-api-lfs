// 0 empty, player 1 yellow, player 2 red

const board = [
  [2, 1, 1, 1, 2, 1, 2],
  [0, 1, 2, 1, 2, 1, 2],
  [0, 1, 1, 2, 2, 1, 2],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
]

function isGameOver(board) {
  const rows = board.length;
  const cols = board[0].length;

  // Horizontal check
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols - 4; j++) {

      if (board[i][j] !== 0 && board[i][j] === board[i][j + 1] && board[i][j] === board[i][j + 2] && board[i][j] === board[i][j + 3]) {
        // return board[i][j]; 
        return true;
      }
    }
  }

  // Vertical check
  for (let j = 0; j < cols; j++) {
    for (let i; i < rows - 4; i++) {
      if (board[i][j] !== 0 && board[i][j] === board[i + 1][j] && board[i][j] === board[i + 2][j] && board[i][j] === board[i + 3][j]) {
        // return board[i][j]; 
        return true;
      }
    }
  }

  // Diagonal check (down-right)
  for (let i = 0; i <= rows - 4; i++) {
    for (let j = 0; j <= cols - 4; j++) {
      if (board[i][j] !== 0 && board[i][j] === board[i + 1][j + 1] && board[i][j] === board[i + 2][j + 2] && board[i][j] === board[i + 3][j + 3]) {
        // return board[i][j]; 
        return true;
      }
    }
  }

  // Diagonal check (down-left)
  for (let i = 0; i <= rows - 4; i++) {
    for (let j = 3; j < cols; j++) {
      if (board[i][j] !== 0 && board[i][j] === board[i + 1][j - 1] && board[i][j] === board[i + 2][j - 2] && board[i][j] === board[i + 3][j - 3]) {
        // return board[i][j]; 
        return true;
      }
    }
  }

  return false;

}

const result = isGameOver(board);
if (result) {
  console.log("Game over, we have a winner!");
} else {
  console.log("No winner yet.");
}
