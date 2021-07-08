export const isBoardFilled = (squares: string[] | null[]) => {
  for (let i = 0; i < squares.length; i++) {
    if (squares[i] === null) {
      return false;
    }
  }
  return true;
};

export const minimax = (
  squares: string[] | null[],
  isMax: number | boolean,
  player: string
) => {
  const opponent = player === 'X' ? 'O' : 'X';

  if (isBoardFilled(squares)) return { square: -1, score: 0 };

  // Initialize 'best'. If isMax, we want to maximize score, and minimize otherwise.
  const bestOption = { square: -1, score: isMax ? -1000 : 1000 };

  // Loop through every square on the board
  for (let i = 0; i < squares.length; i++) {
    // If square is already filled, it's not a valid move so skip it
    if (squares[i]) {
      continue;
    }

    squares[i] = isMax ? player : opponent;

    const score = minimax(squares, !isMax, player).score;

    // This will undo the move
    squares[i] = null;

    if (isMax) {
      // Maximizing player; track the largest score and move.
      if (score > bestOption.score) {
        bestOption.score = score;
        bestOption.square = i;
      }
    } else {
      // Minimizing opponent; track the smallest score and move.
      if (score < bestOption.score) {
        bestOption.score = score;
        bestOption.square = i;
      }
    }
  }

  // The move that leads to the best score at end game.
  return bestOption;
};

export const findBestSquare = (squares: string[], player: string) => {
  // The best move for the 'player' given current board
  return minimax(squares, true, player).square;
};
