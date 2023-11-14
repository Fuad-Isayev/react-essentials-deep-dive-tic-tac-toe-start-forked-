import React from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = "X";
  if (gameTurns.length && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
};

function App() {
  const [gameTurns, setGameTurns] = React.useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      let updatedTurns = [
        {
          player: currentPlayer,
          square: {
            row: rowIndex,
            col: colIndex,
          },
        },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player isActive={activePlayer === "X"} name="Player1" symbol="X" />
          <Player isActive={activePlayer === "O"} name="Player2" symbol="O" />
        </ol>
        <GameBoard
          activePlayer={activePlayer}
          gameTurns={gameTurns}
          onSelect={handleSelectSquare}
        />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
