import React from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsediting] = React.useState(false);
  const [playerName, setPlayerName] = React.useState(name);
  return (
    <li>
      <span className="player">
        <span className="player-name">{playerName}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button>Edit</button>
    </li>
  );
}
