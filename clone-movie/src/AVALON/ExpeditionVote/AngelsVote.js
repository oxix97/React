import React, { useContext, useState } from "react";
import { initContext } from "../AVALON_Reducer";

function AngelsVote() {
  const game = useContext(initContext);
  const [isClick, setIsClick] = useState(false);
  const onClick = (e) => {
    console.log("성공");
    game.vote.push(e.target.value);
    setIsClick(true);
  };
  return (
    <div>
      <button onClick={onClick} value={"success"} disabled={isClick}>
        성공
      </button>
    </div>
  );
}

export default AngelsVote;
