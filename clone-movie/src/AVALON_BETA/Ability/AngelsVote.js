import React, { useContext, useState } from "react";
import { GAME_CHECK } from "../MVC/AVALON_Reducer";
import { GameContext } from "../Store";
import * as S from "../Styled";
function AngelsVote() {
  const { gameState, dispatch } = useContext(GameContext);
  const [isClick, setIsClick] = useState(false);
  const onClick = (e) => {
    const gameData = { ...gameState };
    console.log("성공");
    gameData.vote.push(e.target.value);
    dispatch({ type: GAME_CHECK, gameData });

    setIsClick(true);
  };
  return !isClick ? (
    <S.RowFrame>
      <S.SuccessImage onClick={onClick} value={"s"} disabled={isClick} />
    </S.RowFrame>
  ) : (
    <h1>투표 완료 !</h1>
  );
}

export default AngelsVote;
