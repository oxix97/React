import React from "react";
import {VoteStageFrame, Circle} from "./Styled";
import {Background, needPlayers, voteStageColor} from "../Ability/gameSetting"

function VoteStage(props) {
    const colors = voteStageColor.slice(Background.voteStage, 5);
    return (
        <VoteStageFrame>
            {
                colors.map((color, index) => (
                    <Circle color={color} key={index}/>
                ))
            }
        </VoteStageFrame>
    )
}

export default VoteStage;