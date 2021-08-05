import React, { useContext, useState } from "react";
import { GAME_CHECK } from "../MVC/AVALON_Reducer";
import { GameContext } from "../Store";
import { FailImage, SuccessImage } from "../Styled";

function EvilsVote() {
  const { gameState, dispatch } = useContext(GameContext);
  const [isClick, setIsClick] = useState(false);
  const onClick = (e) => {
    console.log(`${e.target.value}`);
    const gameData = { ...gameState };
    gameData.vote.push(e.target.value);
    dispatch({ type: GAME_CHECK, gameData });
    setIsClick(true);
  };
  return !isClick ? (
    <div>
      <SuccessImage onClick={onClick} value={"s"} disabled={isClick} />
      <FailImage onClick={onClick} value={"f"} disabled={isClick} />
    </div>
  ) : (
    <h1>투표 완료 !</h1>
  );
}

export default EvilsVote;
