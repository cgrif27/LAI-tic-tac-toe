import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import Square from '../components/Square';
import { calculateWinner } from '../Utils/calculateWinner';
import { chooseRandomPlayer } from '../Utils/chooseRandomPlayer';

const Board = (): ReactElement => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');

  const [player, setPlayer] = useState(chooseRandomPlayer());

  const winner = calculateWinner(board);

  const handleClick = useCallback(
    (i: number): void => {
      const tempBoard = [...board];
      // If user click an occupied square or if game is won, return
      if (winner || tempBoard[i]) return;
      // Put an X or an O in the clicked square
      tempBoard[i] = currentPlayer;
      setBoard(tempBoard);
      setCurrentPlayer((prevState) => (prevState === 'X' ? 'O' : 'X'));
    },
    [board, currentPlayer, winner]
  );

  const setupBoard = (): void => {
    setBoard(Array(9).fill(null));
    setPlayer(chooseRandomPlayer());
  };

  useEffect(() => {
    if (currentPlayer !== player) {
      let move = Math.floor(Math.random() * board.length);

      while (board[move] && !board.every((value) => value !== null)) {
        move = Math.floor(Math.random() * board.length);
      }

      handleClick(move);
    }
  }, [currentPlayer, player, board, handleClick]);

  return (
    <>
      <div className="playerContainer">
        <span>You're player is</span> <Square value={player} taken />
      </div>
      {!winner ? (
        <div className="playerContainer">
          <span>It's</span> <Square value={currentPlayer} taken />
          <span>turn!</span>
        </div>
      ) : (
        <div className="playerContainer">
          <span>Winner is</span> <Square value={winner} taken />
        </div>
      )}
      <div className="Board">
        {board.map((square, i) => (
          <Square
            key={i}
            value={square}
            onClick={() => handleClick(i)}
            taken={square != null}
          />
        ))}
      </div>
      <div className="resetButton" onClick={setupBoard}>
        RESET GAME
      </div>
    </>
  );
};

export default Board;
