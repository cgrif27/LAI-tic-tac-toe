import React, { ReactElement } from 'react';

interface SquareProps {
  value: string | null;
  onClick?: (e: unknown) => void;
  taken: boolean;
}

const Square = ({ value, onClick, taken }: SquareProps): ReactElement => {
  return (
    <div
      className={`Square ${value === 'X' ? 'xNext' : 'oNext'} ${
        taken ? '' : 'free'
      }`}
      onClick={onClick}>
      <p className="value">{value}</p>
    </div>
  );
};

export default Square;
