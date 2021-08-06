import React, { useContext } from "react";
import { angels, GameContext } from "../Store";
import AngelsVote from "../Ability/AngelsVote";
import EvilsVote from "../Ability/EvilsVote";
import { EXPEDITION_CLICK } from "../MVC/AVALON_Reducer";
import * as S from "../Styled";
function EXPEDITION_FRAME() {
  const { gameState, dispatch } = useContext(GameContext);
  return (
    <S.RowFrame>
      {gameState.usingPlayers.map((user, index) => (
        <ul key={index}>
          {user.selected ? (
            <div>
              <li> {user.nickname} </li>
              {angels.includes(user.role) ? (
                <AngelsVote value={index} />
              ) : (
                <EvilsVote value={index} />
              )}
            </div>
          ) : null}
        </ul>
      ))}
      <div>
        <button
          onClick={() =>
            dispatch({
              type: EXPEDITION_CLICK,
            })
          }
        >
          결과
        </button>
      </div>
    </S.RowFrame>
  );
}

export default EXPEDITION_FRAME;
