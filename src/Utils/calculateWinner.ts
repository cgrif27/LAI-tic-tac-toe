export const calculateWinner = (squares: string[]): string | null => {
	const boardLineWinnings = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < boardLineWinnings.length; i++) {
		const [a, b, c] = boardLineWinnings[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}

	if (squares.every((value) => value !== null)) return "Draw"
	return null;
}