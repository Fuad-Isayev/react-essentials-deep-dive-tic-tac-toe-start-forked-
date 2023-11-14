export default function Log({ gameTurns }) {
  return (
    <ol id="log">
      {gameTurns.map((turn) => {
        const { square } = turn;
        const { row, col } = square;
        return (
          <li key={`${row}${col}`}>
            {turn.player} selected {row}, {col}
          </li>
        );
      })}
    </ol>
  );
}
