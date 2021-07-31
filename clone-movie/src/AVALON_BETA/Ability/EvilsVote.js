import React, {useContext, useState} from "react";
import {GameContext} from "../Store";
import {FailImage, SuccessImage} from "../Styled";

function EvilsVote() {
    const game = useContext(GameContext);
    const [isClick, setIsClick] = useState(false);
    const onClick = (e) => {
        console.log(`${e.target.value}`);
        game.gameState.vote.push(e.target.value);
        setIsClick(true);
    };
    return (
        !isClick? <div>
            <SuccessImage onClick={onClick} value={"success"} disabled={isClick}/>
            <FailImage onClick={onClick} value={"fail"} disabled={isClick}/>
        </div> : <h1>투표 완료 !</h1>
    );
}

export default EvilsVote;
