import React, { useContext } from "react";
import { GameContext, FRAME_MAIN } from "../Store";
import { SET_COMPONENT } from "../MVC/AVALON_Reducer";
import * as S from "../Styled";
function EXPEDITION_RESULT() {
  const { gameState, dispatch } = useContext(GameContext);
  const expeditionResult = gameState.vote.sort();
  const expeditionSuccessCount = expeditionResult.filter(
    (e) => "o" === e
  ).length;
  const expeditionFailCount = expeditionResult.filter((e) => "x" === e).length;
  return (
    <S.ColumnFrame>
      <S.RowFrame>
        {gameState.expeditionStage === 4 &&
        gameState.usingPlayers.length >= 7 ? (
          <S.RowFrame>
            {expeditionFailCount >= 2 ? "원정 실패" : "원정 성공"}
            <h3>성공 개수 :{expeditionSuccessCount}</h3>
            <h3>실패 개수 :{expeditionFailCount}</h3>
          </S.RowFrame>
        ) : (
          <S.RowFrame>
            {expeditionResult.includes("x") ? "원정 실패" : "원정 성공"}
            <h3>성공 개수 :{expeditionSuccessCount}</h3>
            <h3>실패 개수 :{expeditionFailCount}</h3>
          </S.RowFrame>
        )}
      </S.RowFrame>
      <S.RowFrame>
        {expeditionResult.map((expeditionStage) =>
          expeditionStage === "o" ? <S.SuccessImage /> : <S.FailImage />
        )}
      </S.RowFrame>
      <S.RowFrame>
        <button
          onClick={() =>
            dispatch({ type: SET_COMPONENT, component: FRAME_MAIN })
          }
        >
          다음
        </button>
      </S.RowFrame>
    </S.ColumnFrame>
  );
}

export default EXPEDITION_RESULT;
