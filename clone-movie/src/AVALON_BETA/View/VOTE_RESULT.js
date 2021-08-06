import React, { useContext } from "react";
import { GameContext } from "../Store";
import { VOTE_CHECK } from "../MVC/AVALON_Reducer";
import * as S from "../Styled";
function VOTE_RESULT() {
  const { gameState, dispatch, selectedPlayers } = useContext(GameContext);
  const agreeVotedPlayers = () => {
    const players = [];
    gameState.usingPlayers.map((user) => {
      user.toGo === "agree" && players.push(user.nickname);
    });
    return players;
  };
  const opposeVotedPlayers = () => {
    const players = [];
    gameState.usingPlayers.map((user) => {
      user.toGo === "oppose" && players.push(user.nickname);
    });
    return players;
  };
  console.log(gameState);
  return (
    <S.ColumnFrame>
      <S.MAIN_VOTE_HEADER>{`대표자 : ${selectedPlayers()}`}</S.MAIN_VOTE_HEADER>
      <S.VotePlayers>
        <S.AgreeVotePlayers>
          <h1>{`찬성 : ${agreeVotedPlayers().length}`}</h1>
          <h3>{`${agreeVotedPlayers()}`}</h3>
        </S.AgreeVotePlayers>
        <S.OpposeVotePlayers>
          <h1>{`반대  : ${opposeVotedPlayers().length}`}</h1>
          <h3> {`${opposeVotedPlayers()}`}</h3>
        </S.OpposeVotePlayers>
      </S.VotePlayers>
      <S.RowFrame>
        <button onClick={() => dispatch({ type: VOTE_CHECK })}>다음</button>
      </S.RowFrame>
    </S.ColumnFrame>
  );
}

export default VOTE_RESULT;
