import React, { useState } from "react";
import { Game, DEAD } from "../meetingFrame/Users";

function MafiaUser() {
  const [index, setIndex] = useState(0);
  const [vote, setVote] = useState(Game.users[index].nickname);
  const [isClick, setIsClick] = useState(false);
  const [killed, setKilled] = useState("");
  const onClick = (e) => {
    const playerIndex = e.target.value;
    setIndex(playerIndex);
    setIsClick(true);
    setKilled(Game.users[playerIndex].nickname);
    Game.users[playerIndex].life = DEAD;
  };
  const onChange = (e) => {
    setVote(e.target.value);
  };

  return (
    <div>
      <select onChange={onChange}>
        {Game.users.map((user, index) => (
          <option key={index} value={index}>
            {user.nickname}
          </option>
        ))}
      </select>
      <button onClick={onClick} disabled={isClick} value={vote}>
        습격하기
      </button>
      {isClick ? <h3>{`${killed}를 습격하였습니다.`}</h3> : null}
    </div>
  );
}

export default MafiaUser;
