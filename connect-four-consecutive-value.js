const board = [
// if values were not exposed
// can be optimised - big O not great at the moment
  [2, 1, 1, 1, 2, 1, 2],
  [0, 1, 2, 1, 2, 1, 2],
  [0, 1, 1, 2, 2, 1, 2],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0],
];

function isGameOver(board, consecutiveCount = 4) {
  const rows = board.length;
  const cols = board[0].length;

  // Horizontal check
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j <= cols - consecutiveCount; j++) {
      let count = 1;
      for (let k = 1; k < consecutiveCount; k++) {
        if (board[i][j] !== 0 && board[i][j] === board[i][j + k]) {
          count++;
          if (count === consecutiveCount) return true;
        } else {
          break;
        }
      }
    }
  }

  // Vertical check
  for (let j = 0; j < cols; j++) {
    for (let i = 0; i <= rows - consecutiveCount; i++) {
      let count = 1;
      for (let k = 1; k < consecutiveCount; k++) {
        if (board[i][j] !== 0 && board[i][j] === board[i + k][j]) {
          count++;
          if (count === consecutiveCount) return true;
        } else {
          break;
        }
      }
    }
  }

  // Diagonal check (down-right)
  for (let i = 0; i <= rows - consecutiveCount; i++) {
    for (let j = 0; j <= cols - consecutiveCount; j++) {
      let count = 1;
      for (let k = 1; k < consecutiveCount; k++) {
        if (board[i][j] !== 0 && board[i][j] === board[i + k][j + k]) {
          count++;
          if (count === consecutiveCount) return true;
        } else {
          break;
        }
      }
    }
  }

  // Diagonal check (down-left)
  for (let i = 0; i <= rows - consecutiveCount; i++) {
    for (let j = consecutiveCount - 1; j < cols; j++) {
      let count = 1;
      for (let k = 1; k < consecutiveCount; k++) {
        if (board[i][j] !== 0 && board[i][j] === board[i + k][j - k]) {
          count++;
          if (count === consecutiveCount) return true;
        } else {
          break;
        }
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
