import React, {useContext} from "react";
import {GameContext, MAIN_VOTE, voteStageColor} from "../Store";
import * as S from "../Styled";
import MerlinPlayer from "../Ability/MerlinPlayer";
import PercivalPlayer from "../Ability/PercivalPlayer";
import {SET_COMPONENT} from "../MVC/AVALON_Reducer";

function MAIN_FRAME() {
    const {gameState, dispatch} = useContext(GameContext);
    const colors = voteStageColor.slice(gameState.voteStage, 5);
    return (
        <S.PublicFrame>
            <div>Main</div>
            <S.GameFrame>
                <S.StageFrame>

                </S.StageFrame>
                <S.VoteFrame>

                </S.VoteFrame>
            </S.GameFrame>
            <S.PlayerFrame>
                <S.Players>

                </S.Players>
                <S.Info>

                </S.Info>
            </S.PlayerFrame>
            <S.PublicFrame>
                {gameState.takeStage.map((stage, index) => (
                    <S.Stage key={index}>
                        <h3>{stage}</h3>
                    </S.Stage>
                ))}
            </S.PublicFrame>
            <S.PublicFrame>
                {gameState.usingPlayers.map((user, index) => (
                    <S.User key={index}>
                        <ul>
                            <li>{`nickname : ${user.nickname}`}</li>
                            <li>{`role : ${user.role}`}</li>
                            <br/>
                            {user.role === "Merlin" ? <MerlinPlayer index={index}/> : null}
                            {user.role === "Percival" ? (
                                <PercivalPlayer index={index}/>
                            ) : null}
                        </ul>
                        {index === gameState.represent ? (
                            <button
                                onClick={() =>
                                    dispatch({type: SET_COMPONENT, component: MAIN_VOTE})
                                }
                            >
                                원정 인원 정하기
                            </button>
                        ) : null}
                    </S.User>
                ))}
            </S.PublicFrame>
            <div>
                <h3>VoteTurn</h3>
                <S.VoteStageFrame>
                    {colors.map((color, index) => (
                        <S.Circle color={color} key={index}>
                            {index + 1}
                        </S.Circle>
                    ))}
                </S.VoteStageFrame>
            </div>
        </S.PublicFrame>
    );
}

export default MAIN_FRAME;
