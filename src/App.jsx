import React from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  const [gameTurns, setGameTurns] = React.useState([]);
  const [activePlayer, setActivePlayer] = React.useState("X");

  const handleSelectSquare = (rowIndex, colIndex) => {
    setActivePlayer((current) => (current === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      let currentPlayer = "X";
      if (prevTurns.length && prevTurns[0].player === "X") {
        currentPlayer = "O";
      }
      let updatedTurns = [
        {
          symbol: currentPlayer,
          position: {
            x: rowIndex,
            y: colIndex,
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
    </main>
  );
}

export default App;
