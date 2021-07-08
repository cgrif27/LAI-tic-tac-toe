import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import Square from '../components/Square';
import { calculateWinner } from '../Utils/calculateWinner';
import { chooseRandomPlayer } from '../Utils/chooseRandomPlayer';
import { findBestSquare } from '../Utils/opponentAI';

const Board = (): ReactElement => {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [player, setPlayer] = useState(chooseRandomPlayer());

  const [currentPlayer, setCurrentPlayer] = useState('X');
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
      let move = findBestSquare(board, player);

      // Calculating a random time to simulate opponent delay
      const min = 400;
      const max = 1000;
      const randomTime = Math.floor(Math.random() * (max - min + 1) + min);

      const playerTimer = setTimeout((): void => {
        handleClick(move);
      }, randomTime);

      return (): void => {
        clearTimeout(playerTimer);
      };
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
          {winner === 'Draw' ? (
            <span>It's a Draw</span>
          ) : (
            <>
              <span>Winner is</span> <Square value={winner} taken />
            </>
          )}
        </div>
      )}
      <div className="Board">
        {board.map((square, i) => (
          <Square
            key={i}
            value={square}
            onClick={() => {
              if (currentPlayer === player) handleClick(i);
            }}
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
