import React from "react";
import {Players, Background, needPlayers} from "../Ability/gameSetting"
import {PublicFrame, Frame} from "./Styled";

function ExpeditionStage() {
    return (
        <PublicFrame>
            {
                Background.takeStage.map((stage, index) => (
                    <Frame key={index}>
                        {stage}
                    </Frame>
                ))
            }
        </PublicFrame>
    )
}

export default ExpeditionStage