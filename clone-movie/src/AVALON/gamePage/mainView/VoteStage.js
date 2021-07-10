import React, {useContext, useReducer} from "react";
import {Circle, VoteStageFrame} from "../../MainPage/Styled";
import {voteStageColor} from "../../gameSetting";
import {initContext, reducer} from "../../AVALON_Reducer";

function VoteStage() {
    const game = useContext(initContext)
    const [state, dispatch] = useReducer(reducer, game)
    const colors = voteStageColor.slice(state.voteStage, 5);
    console.log(`voteStage : ${state.voteStage}`)
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

export default VoteStage