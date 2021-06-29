import React, {createContext, useContext, useState} from "react";
import shuffle from 'lodash.shuffle';
import {Circle, Frame, Title, User} from "./MainPage/Styled";
import MerlinPlayer from "./Ability/MerlinPlayer";
import PercivalPlayer from "./Ability/PercivalPlayer";
import Vote from './RepresentVote/Vote'

export const angels = ['Merlin', 'Percival', 'Citizen'];
export const evils = ['Morgana', 'Assassin', 'Heresy', 'Modred'];
export const merlinSight = ['Morgana', 'Assassin', 'Heresy'];
export const percivalSight = ['Morgana', 'Merlin'];

export const needPlayers = {
    _5P: [2, 3, 2, 3, 3],
    _6P: [2, 3, 4, 3, 4],
    _7P: [2, 3, 3, 4, 4],
    _8to10P: [3, 4, 4, 5, 5],
}
export const voteStageColor = ['white', 'white', 'white', 'white', 'red'];

const Games = {
    voteStage: 0,
    expeditionStage: 0,
    represent: 0,
    vote: [],
    takeStage: [],
}

const Players = [
    {nickname: 'user1', role: '', vote: '', toGo: '', selected: false},
    {nickname: 'user2', role: '', vote: '', toGo: '', selected: false},
    {nickname: 'user3', role: '', vote: '', toGo: '', selected: false},
    {nickname: 'user4', role: '', vote: '', toGo: '', selected: false},
    {nickname: 'user5', role: '', vote: '', toGo: '', selected: false},
    // {nickname: 'user6', role: '', vote: '', toGo: '',selected : false},
    // {nickname: 'user7', role: '', vote: '', toGo: '',selected : false},
    // {nickname: 'user8', role: '', vote: '', toGo: '',selected : false},
    // {nickname: 'user9', role: '', vote: '', toGo: '',selected : false},
]

export const mustHaveRoles = ['Merlin', 'Percival', 'Citizen', 'Morgana', 'Assassin'];
export const expandRoles = ['Citizen', 'Heresy', 'Citizen', 'Modred', 'Citizen'];

export const Game = createContext(Games);
export const Player = createContext(Players);

const START = 0;
const MAIN_FRAME = 1;
const VOTE = 2;
const EXPEDITION = 3;
const ASSASSIN = 4;
const END_GAME = 5;


function Store() {
    const user = useContext(Player)
    const game = useContext(Game)

    const [mainFrameClick, setMainFrameClick] = useState(false)
    const [playerCount, setPlayerCount] = useState(0);
    const [voteCount, setVoteCount] = useState(0);
    const [voteResult, setVoteResult] = useState(false)
    const [expedition, setExpedition] = useState(false);
    const [winner, setWinner] = useState('')
    const [page, setPage] = useState(START);
    const [kill, setKill] = useState('')

    function Winner() {
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

    const voteOnChange = e => {
        user[e.target.value].selected = e.target.checked;
        e.target.checked ? setPlayerCount(playerCount + 1) : setPlayerCount(playerCount - 1);
    }
    const voteOnClick = () => {
        if (playerCount === game.takeStage[game.expeditionStage]) {
            setVoteCount(voteCount + 1);
            setMainFrameClick(false);
            setPlayerCount(0)
            setPage(VOTE)
        } else {
            alert(`${game.takeStage[game.expeditionStage]}명을 선택해야합니다.`);
        }
    }
    const votePage = () => {
        let agree = 0;
        let oppose = 0;
        user.map(e => e.toGo === 'agree' ? ++agree : ++oppose)
        if (agree >= oppose) {
            game.voteStage = 0;
            setPage(EXPEDITION)
        } else {
            if (game.voteStage === 4) {
                game.takeStage[game.expeditionStage] = 'fail';
                game.expeditionStage += 1;
                game.voteStage = 0;
            } else {
                game.voteStage += 1;
            }
            setPage(MAIN_FRAME)
        }
        game.represent += 1;
        game.represent %= user.length;
        nextPage()
    }
    const nextPage = () => {
        const angelCount = game.takeStage.filter(element => 'success' === element).length;
        const evilCount = game.takeStage.filter(element => 'fail' === element).length;
        if (angelCount === 3) {
            setPage(ASSASSIN)
        }
        if (evilCount === 3) {
            setWinner('EVILS_WIN')
            setPage(END_GAME)
        }
        setExpedition(false)
        game.vote = []
    }
    const expeditionClick = () => {
        setExpedition(true)
        if (game.expeditionStage === 4 && user.length >= 7) {
            if (game.vote.filter(element => 'fail' === element).length >= 2) {
                game.takeStage[game.expeditionStage] = 'fail';
            } else {
                game.takeStage[game.expeditionStage] = 'success'
            }
        } else {
            game.vote.includes('fail') ?
                game.takeStage[game.expeditionStage] = 'fail' :
                game.takeStage[game.expeditionStage] = 'success'
        }
        game.expeditionStage += 1;
    }

    const playerLengthSelect = () => {
        switch (user.length) {
            case 5 :
                game.takeStage = needPlayers._5P;
                break;
            case 6:
                game.takeStage = needPlayers._6P;
                break;
            case 7:
                game.takeStage = needPlayers._7P;
                break;
            case 8:
            case 9:
            case 10:
                game.takeStage = needPlayers._8to10P;
                break;
            default:
                alert('error');
        }
    }
    const gameStart = () => {
        const PlayersNumber = user.length;
        if (PlayersNumber >= 5) {
            const temp = [
                ...mustHaveRoles,
                ...expandRoles.slice(0, PlayersNumber - 5),
            ];
            const roles = shuffle(temp);
            // eslint-disable-next-line array-callback-return
            user.map((user, index) => {
                user.role = roles[index];
            });
            setPage(MAIN_FRAME)
        } else {
            alert('error')
        }
    }
    //----------START 부분 끝
    const View = () => {
        const colors = voteStageColor.slice(game.voteStage, 5);
        const clicked = () => {
            setMainFrameClick(true)
        }
        const stageView = () => {
            game.takeStage.map((stage, index) => (
                <Frame key={index}>
                    <h3>{stage}</h3>
                </Frame>
            ))
        }
        const voteView = () => {
            colors.map((color, index) => (
                <Circle color={color} key={index}/>
            ))
        }
        const frameClick = () => {
            !mainFrameClick ?
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
                        {index === game.represent ? <button onClick={clicked}>원정 인원 정하기</button> : null}
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
        //MAIN FRAME 단계 끝

        const voteStage = () => {
            const resultClick = () => {
                setVoteResult(true)
            }
            return (
                <div>
                    <div>VOTE</div>
                    {!voteResult ?
                        <div>
                            <Title>
                                {user.map((user, index) => <Vote key={index} index={index}/>)}
                            </Title>
                            <button onClick={resultClick}>결과</button>
                        </div> :
                        <div>
                            {user.map((user, index) => (
                                <ul key={index}>
                                    <li>{`nickname : ${user.nickname}`}</li>
                                    <li>{`vote : ${user.toGo === 'agree' ? '찬성' : '반대'}`}</li>
                                </ul>
                            ))}
                            <button onClick={() => ((votePage)(setVoteResult(false)))}>다음</button>
                        </div>
                    }
                </div>
            )
        }
        // VOTE 끝

        //view, action 을 어캐 나누지?? 점심에 물어봐야지
    }

}

//리듀서 사용 , 스토어 써서
