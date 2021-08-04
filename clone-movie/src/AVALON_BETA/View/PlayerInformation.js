import { useContext } from "react";
import { GameContext } from "../Store";
import * as S from "../Styled";

const PlayerInformation = () => {
  const { gameState } = useContext(GameContext);
  const selectPlayer = () => {
    gameState.usingPlayers.map((user, index) => {});
  };
  return (
    <div>
      <div></div>
    </div>
  );
};
export default PlayerInformation;
