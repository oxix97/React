import React, {useContext, useReducer} from "react";
import {Circle, Column, PlayerList, VoteStageFrame} from "../../MainPage/Styled";
import {voteStageColor} from "../../gameSetting";
import {initContext, reducer} from "../../AVALON_Reducer";
import {C} from "react-select/dist/index-4bd03571.esm";

function VoteStage() {
    const game = useContext(initContext)
    const [state, dispatch] = useReducer(reducer, game)
    const colors = voteStageColor.slice(state.voteStage, 5);
    console.log(`voteStage : ${state.voteStage}`)
    return (
        <div>
            <PlayerList>
                <VoteStageFrame direction={'row'}>
                    {
                        colors.map((color, index) => (
                            <Circle color={color} key={index}/>
                        ))
                    }

                </VoteStageFrame>
            </PlayerList>
        </div>


    )
}

export default VoteStage