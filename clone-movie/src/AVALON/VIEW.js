import React, {useContext, useReducer} from "react";
import {PublicFrame, Title, User} from "./MainPage/Styled";
import MerlinPlayer from "./Ability/MerlinPlayer";
import PercivalPlayer from "./Ability/PercivalPlayer";
import Vote from "./RepresentVote/Vote";
import {angels} from "./gameSetting";
import AngelsVote from "./ExpeditionVote/AngelsVote";
import EvilsVote from "./ExpeditionVote/EvilsVote";
import {func, initContext, Pages} from "./AVALON_BETA_Reducer";
import {voteStageColor} from "../AVALON_BACKUP/gameSetting";
import {Circle, Frame, VoteStageFrame} from "../AVALON_BACKUP/MainPage/Styled";
import {GameStart} from "./AVALON_Controller";


function VIEW() {
    const context = useContext(initContext)
    if (context.page === Pages.START_FRAME) {
        return (
            <button onClick={GameStart}>게임 시작</button>
        )
    }
    if (context.page === Pages.MAIN_FRAME) {
        const page = Pages.MAIN_VOTE
        const colors = voteStageColor.slice(context.voteStage, 5);
        return (
            <>
                <div>Main</div>
                <PublicFrame>
                    {
                        context.takeStage.map((stage, index) => (
                            <Frame key={index}>
                                <h3>{stage}</h3>
                            </Frame>
                        ))
                    }
                </PublicFrame>
                <VoteStageFrame>
                    {
                        colors.map((color, index) => (
                            <Circle color={color} key={index}/>
                        ))
                    }
                </VoteStageFrame>
                <PublicFrame>
                    {
                        context.playerData.map((user, index) => (
                            <User key={index}>
                                <ul>
                                    <li>{`nickname : ${user.nickname}`}</li>
                                    <li>{`role : ${user.role}`}</li>
                                    <br/>
                                    {user.role === 'Merlin' ?
                                        <MerlinPlayer index={index}/> : null
                                    }
                                    {user.role === 'Percival' ?
                                        <PercivalPlayer index={index}/> : null
                                    }
                                </ul>
                                {index === state.represent ?
                                    <button onClick={() => dispatch({type: func.setPage, page})}>원정 인원
                                        정하기</button> : null}
                            </User>
                        ))
                    }
                </PublicFrame>
            </>

        );
    }
    if (context.page === Pages.MAIN_VOTE) {
        return (
            <div>
                <h3>{"원정에 참여하는 인원 수 : " + state.takeStage[state.expeditionStage] + "명"}</h3>
                {state.playerData.map((user, index) => (
                    <ul key={index}>
                        <label>{user.nickname}
                            <input
                                onChange={() => dispatch({type: func.voteOnChange, index: index})}
                                type="checkbox"
                                name={'checkbox'}
                                value={index}
                            />
                        </label>
                    </ul>
                ))}

                <button onClick={() => dispatch({type: func.voteOnClick})}>결정</button>
            </div>
        )
    }
    if (context.page === Pages.VOTE_FRAME) {
        const page = Pages.VOTE_RESULT
        return (
            <>
                <div>VOTE</div>
                <div>
                    <Title>
                        {state.playerData.map((user, index) => <Vote key={index} index={index}/>)}
                    </Title>
                    <button onClick={() => dispatch({type: func.setPage, page})}>결과</button>
                </div>

            </>
        );
    }
    if (context.page === Pages.VOTE_RESULT) {
        return (
            <div>
                {context.playerData.map((user, index) => (
                    <ul key={index}>
                        <li>{`nickname : ${user.nickname}`}</li>
                        <li>{`vote : ${user.toGo === 'agree' ? '찬성' : '반대'}`}</li>
                    </ul>
                ))}
                <button onClick={() => dispatch({type: func.votePage})}>다음</button>
            </div>
        )
    }

    if (context.page === Pages.EXPEDITION_FRAME) {
        return (
            <>
                <div>
                    {
                        context.playerData.map((user, index) => (
                            <ul key={index}>
                                {user.selected ?
                                    <div>
                                        <li>{user.nickname}</li>
                                        {angels.includes(user.role) ?
                                            <AngelsVote value={index}/>
                                            :
                                            <EvilsVote value={index}/>}
                                    </div>
                                    : null}
                                {user.selected = false}
                            </ul>
                        ))
                    }
                    <button onClick={() => dispatch({type: func.expeditionClick})}>결과</button>
                </div>
            </>
        );
    }
    if (context.page === Pages.EXPEDITION_RESULT) {
        return (
            <div>
                <div>
                    {
                        context.expeditionStage === 4 && state.playerData.length >= 7 ?
                            <div>
                                {state.vote.filter(element => 'fail' === element).length >= 2 ? '원정 실패' : '원정 성공'}
                                <div>성공 개수 : {state.vote.filter(element => 'success' === element).length}</div>
                                <div>실패 개수 :{state.vote.filter(element => 'fail' === element).length}</div>
                            </div> :
                            <div>
                                {state.vote.includes('fail') ? '원정 실패' : '원정 성공'}
                                <div>성공 개수 : {state.vote.filter(element => 'success' === element).length}</div>
                                <div>실패 개수 :{state.vote.filter(element => 'fail' === element).length}</div>
                            </div>
                    }
                </div>
                <button onClick={() => dispatch({type: func.nextPage})}>다음</button>
            </div>
        )
    }
    if (context.page === Pages.ASSASSIN_FRAME) {
        const onChange = e => {
            setKill(e.target.value)
        }
        const killPlayer = () => {
            const winner = kill === 'Merlin' ? '악의 승리' : '선의 승리'
            setWinner(winner)
            setPage(END_GAME_FRAME)
        }
        return (
            <>
                <h3>ASSASSIN</h3>
                {state.playerData.map((user, index) => (
                    <label key={index}>
                        {user.nickname}
                        <input type="radio"
                               name={'vote'}
                               value={user.role}
                               onChange={onChange}
                        />
                        <br/>
                    </label>
                ))}
                <button onClick={killPlayer}>kill</button>
            </>
        )
    }
    if (context.page === Pages.END_GAME_FRAME) {
        return (
            <>
                {/*<h1>{winner}</h1>*/}
                <h3>ENDGAME</h3>
                <hr/>
                {state.playerData.map((player, index) => (
                    <ul key={index}>
                        <p>player_nickname : <b>{player.nickname}</b></p>
                        <p>role : <b>{player.role}</b></p>
                        <hr/>
                    </ul>
                ))}
            </>
        )
    }
    return (
        <div>
            <h3>error</h3>
        </div>
    )
}

export default VIEW