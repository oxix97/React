import React, {useContext, useEffect, useState} from "react";
import {Game, Player, needPlayers, mustHaveRoles, expandRoles, voteStageColor, angels, Store} from "./gameSetting";
import {Circle, Frame, PublicFrame, Title, User, VoteStageFrame} from "./MainPage/Styled";
import shuffle from "lodash.shuffle";
import MerlinPlayer from "./Ability/MerlinPlayer";
import PercivalPlayer from "./Ability/PercivalPlayer";
import Vote from "./RepresentVote/Vote";
import AngelsVote from "./ExpeditionVote/AngelsVote";
import EvilsVote from "./ExpeditionVote/EvilsVote";
import TakeStage from "./gamePage/mainView/TakeStage";
import VoteStage from "./MainPage/VoteStage";
import {createStore} from "redux";

const START = 0;
const MAIN_FRAME = 1;
const VOTE = 2;
const EXPEDITION = 3;
const ASSASSIN = 4;
const END_GAME = 5;

function AVALON_VIEW(state,action) {
    if (page === START) {
        return (
            <button onClick={onClick}>게임 시작</button>
        )
    }
    if (page === MAIN_FRAME) {
        return (
            <>
                <div>Main</div>
                <TakeStage/>
                <VoteStage/>
                <PublicFrame>
                    {!mainFrameClick ?
                        user.map((user, index) => (
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
                                {index === game.represent ? <button onClick={mainFrameClicked}>원정 인원 정하기</button> : null}
                            </User>
                        )) :
                        <div>
                            {user.map((user, index) => (
                                <ul key={index}>
                                    <label>{user.nickname}
                                        <input
                                            onChange={voteOnChange}
                                            type="checkbox"
                                            name={'checkbox'}
                                            value={index}/>
                                    </label>
                                </ul>
                            ))}
                            <button onClick={voteOnClick}>결정</button>
                        </div>
                    }
                </PublicFrame>
            </>
        );
    }
    if (page === VOTE) {
        return (
            <div>
                <div>VOTE</div>
                {!voteResult ?
                    <div>
                        <Title>
                            {user.map((user, index) => <Vote key={index} index={index}/>)}
                        </Title>
                        <button onClick={setVoteTrue}>결과</button>
                    </div> :
                    <div>
                        {user.map((user, index) => (
                            <ul key={index}>
                                <li>{`nickname : ${user.nickname}`}</li>
                                <li>{`vote : ${user.toGo === 'agree' ? '찬성' : '반대'}`}</li>
                            </ul>
                        ))}
                        <button onClick={() => ((votePage)(setVoteFalse))}>다음</button>
                    </div>
                }
            </div>
        )
    }

    if (page === EXPEDITION) {
        return (
            <>
                {!expedition ?
                    <div>
                        {
                            user.map((user, index) => (
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
                        <button onClick={expeditionClick}>Click</button>
                    </div> :
                    <div>
                        <div>
                            {
                                game.expeditionStage === 4 && user.length >= 7 ?
                                    <div>
                                        {game.vote.filter(element => 'fail' === element).length >= 2 ? '원정 실패' : '원정 성공'}
                                        <div>성공 개수 : {game.vote.filter(element => 'success' === element).length}</div>
                                        <div>실패 개수 :{game.vote.filter(element => 'fail' === element).length}</div>
                                    </div> :
                                    <div>
                                        {game.vote.includes('fail') ? '원정 실패' : '원정 성공'}
                                        <div>성공 개수 : {game.vote.filter(element => 'success' === element).length}</div>
                                        <div>실패 개수 :{game.vote.filter(element => 'fail' === element).length}</div>
                                    </div>
                            }
                        </div>
                        <button onClick={() => ((nextPage)(setPage(MAIN_FRAME)))}>다음</button>
                    </div>
                }
            </>
        )
    }
    if (page === ASSASSIN) {
        return (
            <>
                <h3>ASSASSIN</h3>
                {user.map((user, index) => (
                    <label key={index}>
                        {user.nickname}
                        <input type="radio"
                               name={'vote'}
                               value={user.role}
                               onChange={assassinOnChange}
                        />
                        <br/>
                    </label>
                ))}
                <button onClick={killPlayer}>kill</button>
            </>
        )
    }
    if (page === END_GAME) {
        return (
            <>
                <h1>{winner}</h1>
                <h3>ENDGAME</h3>
                <hr/>
                {user.map((player, index) => (
                    <ul key={index}>
                        <p>player_nickname : <b>{player.nickname}</b></p>
                        <p>role : <b>{player.role}</b></p>
                        <hr/>
                    </ul>
                ))}
            </>
        )
    }
}

export default AVALON_VIEW