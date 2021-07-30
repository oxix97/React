import React, {useContext} from "react";
import {GameContext, VOTE_RESULT} from "../Store";
import {Title} from "../Styled";
import Vote from "./Vote";
import {SET_COMPONENT} from "../MVC/AVALON_Reducer";
import * as S from '../Styled'

function VOTE_FRAME() {
    const {gameState, dispatch} = useContext(GameContext);
    const selectedPlayers = () => {
        let temp = []
        gameState.usingPlayers.map((user) => {
            user.selected && temp.push(user.nickname)
        })
        return temp
    }
    return (
        <S.VoteFrame>
            <S.VoteHeader>{`대표자 : ${selectedPlayers()}`}</S.VoteHeader>
            <div>
                <Title>
                    {gameState.usingPlayers.map((user, index) => (
                        <Vote key={index} index={index}/>
                    ))}
                </Title>

            </div>
            <button
                onClick={() =>
                    dispatch({type: SET_COMPONENT, component: VOTE_RESULT})
                }>
                투표 결과
            </button>
        </S.VoteFrame>
    );
}

export default VOTE_FRAME;
