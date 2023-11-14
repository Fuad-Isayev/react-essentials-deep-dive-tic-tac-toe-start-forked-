import React from "react";

export default function Player({ name, symbol, isActive }) {
  const [isEditing, setIsediting] = React.useState(false);
  const [playerName, setPlayerName] = React.useState(name);

  const toggleIsEditing = () => {
    setIsediting((prev) => !prev);
  };

  const handleNameChange = (event) => {
    setPlayerName(event.target.value);
  };

  let playerNameHTML = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    playerNameHTML = (
      <input type="text" onChange={handleNameChange} value={playerName} />
    );
  }
  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {playerNameHTML}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={toggleIsEditing}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
