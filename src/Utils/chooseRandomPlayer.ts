const players = ['X', 'O'];

export const chooseRandomPlayer = (): string => {
    return players[Math.floor(Math.random() * players.length)];
  };
  