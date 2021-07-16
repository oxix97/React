import React, {createContext, useContext, useReducer, useState, useEffect, useMemo} from "react";
import shuffle from 'lodash.shuffle';
import {Pages} from "./MVC/AVALON_Reducer";

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
export const mustHaveRoles = ['Merlin', 'Percival', 'Citizen', 'Morgana', 'Assassin'];
export const expandRoles = ['Citizen', 'Heresy', 'Citizen', 'Modred', 'Citizen'];

const Games = {
    voteStage: 0,
    expeditionStage: 0,
    represent: 0,
    vote: [],
    takeStage: [],

//**--------------------**
    playerCount: 0,
    voteCount: 0,
    voteResult: false,
    expedition: false,
    winner: '',
    page: Pages.START_FRAME,
    kill: '',
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
const playerData = {
    nickname: '',
    role: '',
    vote: '',
    toGo: '',
    selected: false
}
//
const gameData = {
    voteStage: 0,
    expeditionStage: 0,
    represent: 0,
    vote: [],
    takeStage: [],
    page: Pages.START_FRAME,
}
const testPlayer = [
    {nickname: 'user1', role: '', vote: '', toGo: '', selected: false},
    {nickname: 'user2', role: '', vote: '', toGo: '', selected: false},
    {nickname: 'user3', role: '', vote: '', toGo: '', selected: false},
    {nickname: 'user4', role: '', vote: '', toGo: '', selected: false},
    {nickname: 'user5', role: '', vote: '', toGo: '', selected: false},
    // {nickname: 'user6', role: '', vote: '', toGo: '',selected : false},
    // {nickname: 'user7', role: '', vote: '', toGo: '',selected : false},
    // {nickname: 'user8', role: '', vote: '', toGo: '',selected : false},
    // {nickname: 'user9', role: '', vote: '', toGo: '',selected : false},
    //
]

const GameContext = React.createContext('')
const PlayerContext = React.createContext('')

const Store = ({children}) => {
    // const nickname = localStorage.getItem('nickname')
    const [gameState, setGameState] = useState({
        usingPlayers: [
            {nickname: 'user1', role: '', vote: '', toGo: '', selected: false},
            {nickname: 'user2', role: '', vote: '', toGo: '', selected: false},
            {nickname: 'user3', role: '', vote: '', toGo: '', selected: false},
            {nickname: 'user4', role: '', vote: '', toGo: '', selected: false},
            {nickname: 'user5', role: '', vote: '', toGo: '', selected: false},
        ],
        voteStage: 0, //5-voteStage 재투표 가능횟수
        expeditionStage: 0, //게임 expedition 진행 상황
        represent: 0, //원정 인원 정하는 대표자 index
        vote: [], //원정 성공 여부 투표함
        takeStage: [], //인원에 맞는 게임 스테이지 설정
        playerCount: 0, // 대표자가 원정에 보낼 인원 수
        voteCount: 0, //
        winner: '',
        page: Pages.START_FRAME,
        kill: '',
    })
    const gameStart = () => {
        console.log('gameStart')
        const playersNumber = gameState.usingPlayers.length
        let gameTable = []
        switch (playersNumber) {
            case 5 :
                gameTable = needPlayers._5P;
                break;
            case 6:
                gameTable = needPlayers._6P;
                break;
            case 7:
                gameTable = needPlayers._7P;
                break;
            case 8:
            case 9:
            case 10:
                gameTable = needPlayers._8to10P;
                break;
            default:
                console.log('error')
        }
        if (playersNumber >= 5) {
            const temp = [
                ...mustHaveRoles,
                ...expandRoles.slice(0, playersNumber - 5),
            ];
            const roles = shuffle(temp)
            // peers.forEach((i) => {
            //     playerArr.push({
            //         nickname: i.nickname, // nickname
            //         role: roles[i], // role
            //         vote: '', // 대표자 선정 찬반 투표
            //         toGo: '', // 원정에 선정된 사람은 true, 그렇지 않으면 false
            //         selected: false, // 대표자가 선정
            //     })
            // })
            // playerArr.forEach(() => {
            //     gameArr.push({
            //         voteStage: 0, //5-voteStage 재투표 가능횟수
            //         expeditionStage: 0, //게임 expedition 진행 상황
            //         represent: 0, //원정 인원 정하는 대표자 index
            //         vote: [], //원정 성공 여부 투표함
            //         takeStage: gameTable, //인원에 맞는 게임 스테이지 설정
            //         playerCount: 0, // 대표자가 원정에 보낼 인원 수
            //         voteCount: 0, //
            //         winner: '',
            //         page: Pages.START_FRAME,
            //         kill: '',
            //     })
            // })
            const halt = true
            // sendDataToPeers(GAME, {game: AVALON, nickname, peers, data: {gameArr, playerArr,}})
            gameState.usingPlayers.map((user, index) => {
                user.role = roles[index]
            })
            setGameState({...gameState, page: Pages.MAIN_FRAME, takeStage: gameTable})
        } else {
            alert(`${playersNumber}명입니다. ${5 - playersNumber}명이 더 필요합니다.`)
        }
    };
    const voteOnChange = e => { //사용자 선택 e
        console.log('voteOnChange')
        const playerCount = e.target.checked ? gameState.playerCount + 1 : gameState.playerCount - 1
        const index = e.target.value
        const checked = e.target.checked
        console.log(`index : ${index}, checked : ${checked}`)
        // dispatch({type: func.voteOnChange, index: index, playerCount: playerCount, checked: checked})
        // sendDataToPeers(GAME, {game: AVALON, nickname, peers, data: {playerCount, index, checked}})
        setGameState({...gameState, index: index, playerCount: playerCount, checked: checked})
    }
    const voteOnClick = () => {
        console.log('voteOnClick')
        if (gameState.playerCount === gameState.takeStage[gameState.expeditionStage]) {
            const voteCount = gameState.voteCount + 1
            const playerCount = 0
            // dispatch({type: func.voteOnClick, voteCount: voteCount, playerCount: playerCount, page: page})
            // sendDataToPeers(GAME, {game: AVALON, nickname, peers, data: {voteCount, playerCount}})
            setGameState({...gameState, voteCount: voteCount, playerCount: playerCount})
            setPage(Pages.VOTE_FRAME)
        } else {
            alert(`${gameState.takeStage[gameState.expeditionStage]}명을 선택해야합니다.`);
        }
    }
    const votePage = () => {
        console.log('votePage')
        let agree = 0;
        let oppose = 0;
        gameState.usingPlayers.map(e => e.toGo === 'agree' ? ++agree : ++oppose)
        let expeditionStage, index = gameState.expeditionStage
        let voteStage = 0
        let page = ''
        if (agree >= oppose) {
            voteStage = 0
            page = Pages.EXPEDITION_FRAME
        } else {
            if (gameState.voteStage === 4) {
                expeditionStage = gameState.expeditionStage + 1
                voteStage = 0
                setGameState({
                    ...gameState,
                    takeStage: 'fail'
                })
            } else {
                // state.voteStage += 1;
                voteStage = gameState.voteStage + 1
            }
            page = Pages.MAIN_FRAME
        }
        const represent = (gameState.represent + 1) % gameState.usingPlayers.length
        // sendDataToPeers(GAME, {
        //     game: AVALON, nickname, peers, data: {
        //         index: index,
        //         page: page,
        //         voteStage: voteStage,
        //         expeditionStage: expeditionStage,
        //         represent: represent
        //     }
        // })
        setGameState({
            ...gameState,
            index: index,
            page: page,
            voteStage: voteStage,
            expeditionStage: expeditionStage,
            represent: represent
        })
        setPage(page)
        nextPage()
    }
    const nextPage = () => {
        console.log('nextPage')
        const angelCount = gameState.takeStage.filter(element => 'success' === element).length;
        const evilCount = gameState.takeStage.filter(element => 'fail' === element).length;
        let page = ''
        const winner = 'EVILS_WIN'
        if (angelCount === 3) {
            page = Pages.ASSASSIN_FRAME
        }
        if (evilCount === 3) {
            page = Pages.END_GAME_FRAME
        }
        const vote = []
        // sendDataToPeers(GAME, {
        //     game: AVALON, nickname, peers,
        //     data: {
        //         vote: vote,
        //         page: page,
        //         winner: winner,
        //     }
        // })
        setGameState({
            ...gameState,
            vote: vote,
            winner: winner
        })
        setPage(page)
    }
    const expeditionClick = () => {
        let value = ''
        if (gameState.expeditionStage === 4 && gameState.playerData.length >= 7) {
            if (gameState.vote.filter(element => 'fail' === element).length >= 2) {
                gameState.takeStage[gameState.expeditionStage] = 'fail';
                value = 'fail'
            } else {
                gameState.takeStage[gameState.expeditionStage] = 'success'
                value = 'success'
            }
        } else {
            gameState.vote.includes('fail') ?
                value = 'fail' :
                value = 'success'
        }
        const expeditionStage = gameState.expeditionStage
        const nextExpeditionStage = gameState.expeditionStage + 1
        // sendDataToPeers(GAME, {
        //     game: AVALON, nickname, peers,
        //     data: {
        //         value: value,
        //         expeditionStage: expeditionStage,
        //         nextExpeditionStage: nextExpeditionStage,
        //     }
        // })
        setGameState({
            ...gameState,
            value: value,
            expeditionStage: expeditionStage,
            nextExpeditionStage: nextExpeditionStage
        })
    }
    const killPlayer = () => {
        const targetPlayer = selectPlayer.toString()
        const winner = targetPlayer === 'Merlin' ? 'ANGELS_WIN' : 'EVILS_WIN'
        setGameState({...gameState, winner: winner, page: Pages.END_GAME_FRAME})
    }
    const selectPlayer = e => {
        return e.target.value
    }
    const setPage = (page) => {
        console.log(page)
        setGameState({
            ...gameState,
            page: page
        })
    }
    // useEffect(() => {
    //     if (peerData.type === GAME && peerData.game === AVALON) {
    //         const data = peerData.data
    //         console.log(data)
    //         setPlayerState([...data.playerArr])
    //     }
    // }, [peerData])
    return (
        <PlayerContext.Provider value={
            {
                testPlayer,
            }}>
            <GameContext.Provider value={
                {
                    gameState,
                    gameStart,
                    voteOnChange,
                    voteOnClick,
                    votePage,
                    nextPage,
                    expeditionClick,
                    killPlayer,
                    selectPlayer,
                    setPage,
                }
            }>
                {children}
            </GameContext.Provider>
        </PlayerContext.Provider>

    )
}
export {PlayerContext, Store, GameContext}