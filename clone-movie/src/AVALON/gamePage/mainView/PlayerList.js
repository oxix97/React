import React, { useContext } from "react";
import { initContext, reducer } from "../../AVALON_Reducer";
import { Column, Player } from "../../MainPage/Styled";

function PlayerList() {
  const user = useContext(initContext);
  return (
    <Column>
      <div>
        {user.playerData.map((user, index) => (
          <div key={index}>
            <Player>{user.nickname}</Player>
          </div>
        ))}
      </div>
    </Column>
  );
}
export default PlayerList;
