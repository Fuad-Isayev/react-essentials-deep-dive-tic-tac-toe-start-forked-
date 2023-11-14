const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelect, gameTurns }) {
  // const [gameBoard, setGameBoard] = React.useState(initialBoard);
  let gameBoard = initialBoard;
  gameTurns.forEach(
    (turn) => (gameBoard[turn.position.x][turn.position.y] = turn.symbol),
  );

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => onSelect(rowIndex, colIndex)}>
                  {symbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
