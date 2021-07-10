import React, {createContext} from "react";
import {expandRoles, mustHaveRoles, needPlayers,} from "./gameSetting";

import shuffle from "lodash.shuffle";

export const Pages = {
    START_FRAME: 'START_FRAME',
    //
    MAIN_FRAME: 'MAIN_FRAME',
    MAIN_VOTE: 'MAIN_VOTE',
    //
    VOTE_FRAME: 'VOTE_FRAME',
    VOTE_RESULT: 'VOTE_RESULT',
    //
    EXPEDITION_FRAME: 'EXPEDITION_FRAME',
    EXPEDITION_RESULT: 'EXPEDITION_RESULT',
    //
    ASSASSIN_FRAME: 'ASSASSIN_FRAME',
    //
    END_GAME_FRAME: 'END_GAME_FRAME',
}
export const func = {
    gameStart: 'gameStart',
    votePage: 'votePage',
    nextPage: 'nextPage',
    voteOnClick: 'voteOnClick',
    voteResult: 'voteResult',
    voteOnChange: 'voteOnChange',
    expeditionClick: 'expeditionClick',
    assassinOnChange: 'assassinOnChange',
    killPlayer: 'killPlayer',
    expeditionResult: 'expeditionResult',
    setPage: 'setPage',
    initVote: 'initFVote'
}
const initState = {
    playerData: [
        {nickname: 'user1', role: '', vote: '', toGo: '', selected: false},
        {nickname: 'user2', role: '', vote: '', toGo: '', selected: false},
        {nickname: 'user3', role: '', vote: '', toGo: '', selected: false},
        {nickname: 'user4', role: '', vote: '', toGo: '', selected: false},
        {nickname: 'user5', role: '', vote: '', toGo: '', selected: false},
        //여기에 플레이어 데이터
        // {nickname: 'user6', role: '', vote: '', toGo: '',selected : false},
        // {nickname: 'user7', role: '', vote: '', toGo: '',selected : false},
        // {nickname: 'user8', role: '', vote: '', toGo: '',selected : false},
        // {nickname: 'user9', role: '', vote: '', toGo: '',selected : false},
    ],
    page: Pages.START_FRAME,
    voteStage: 0,
    represent: 0,
    vote: [],
    takeStage: [],
    playerCount: 0,
    voteCount: 0,
    winner: '',
    expeditionStage: 0,
    kill: '',
}
export const initContext = createContext(initState)
export const reducer = (state, action) => {
    console.log(state)
    switch (action.type) {
        case func.initVote : {
            state.playerCount = 0
            state.vote = []
            return {...state}
        }
        case func.setPage :
            console.log(action.page)
            return {...state, page: action.page, playerCount: 0}
        case func.gameStart: {
            const PlayersNumber = state.playerData.length;
            switch (PlayersNumber) {
                case 5 :
                    state.takeStage = needPlayers._5P;
                    break;
                case 6:
                    state.takeStage = needPlayers._6P;
                    break;
                case 7:
                    state.takeStage = needPlayers._7P;
                    break;
                case 8:
                case 9:
                case 10:
                    state.takeStage = needPlayers._8to10P;
                    break;
                default:
                    alert('error');
            }
            if (PlayersNumber >= 5) {
                const temp = [
                    ...mustHaveRoles,
                    ...expandRoles.slice(0, PlayersNumber - 5),
                ];
                const roles = shuffle(temp);
                state.playerData.map((user, index) => {
                    user.role = roles[index];
                });
                console.log(`-------------gameStart-------------`)
                return {...state, page: Pages.MAIN_FRAME}
            } else {
                alert('error')
                return {...state}
            }
        }
        //checkbox check여부 확인하기
        case func.voteOnChange : {
            state.playerData[action.index].selected = !state.playerData[action.index].selected
            const check = state.playerData[action.index].selected
            const count = check ? state.playerCount + 1 : state.playerCount - 1
            return {
                ...state,
                playerCount: count
            }
        }
        case func.voteOnClick : {
            if (state.playerCount === state.takeStage[state.expeditionStage]) {
                const voteCount = state.voteCount + 1
                return {...state, voteCount: voteCount, page: Pages.VOTE_FRAME}
            } else {
                alert(`${state.takeStage[state.expeditionStage]}명을 선택해야합니다.`);
                return {...state}
            }
        }
        case func.votePage : {
            let agree = 0;
            let oppose = 0;
            state.playerData.map(e => e.toGo === 'agree' ? ++agree : ++oppose)
            console.log(`agree : ${agree} , oppose : ${oppose}`)
            state.represent += 1;
            state.represent %= state.playerData.length;
            if (agree >= oppose) {
                state.voteStage = 0;
                return {...state, page: Pages.EXPEDITION_FRAME}
            } else if (agree < oppose) {
                if (state.voteStage === 4) {
                    state.takeStage[state.expeditionStage] = 'fail';
                    state.expeditionStage += 1;
                    state.voteStage = 0;
                } else {
                    state.voteStage += 1;
                }
                return {...state, page: Pages.MAIN_FRAME, playerCount: 0}
            }
            return {...state}
        }
        case func.nextPage : {
            const angelCount = state.takeStage.filter(element => 'success' === element).length;
            const evilCount = state.takeStage.filter(element => 'fail' === element).length;
            if (angelCount === 3) {
                return {...state, page: Pages.ASSASSIN_FRAME}
            } else if (evilCount === 3) {
                return {...state, page: Pages.END_GAME_FRAME, winner: 'EVILS_WIN'}
            }
            return {...state, page: Pages.MAIN_FRAME, playerCount: 0, vote: action.vote}
        }
        case func.expeditionClick : {
            console.log(state.vote)
            if (state.expeditionStage === 4 && state.playerData.length >= 7) {
                if (state.vote.filter(element => 'fail' === element).length >= 2) {
                    state.takeStage[state.expeditionStage] = 'fail';
                } else {
                    state.takeStage[state.expeditionStage] = 'success'
                }
            } else {
                state.vote.includes('fail') ?
                    state.takeStage[state.expeditionStage] = 'fail' :
                    state.takeStage[state.expeditionStage] = 'success'
            }
            const expeditionStage = state.expeditionStage + 1
            return {...state, expeditionStage: expeditionStage, page: Pages.EXPEDITION_RESULT}
        }
        default :
            return {state}
    }
};

// export const reducer = (state, action) => {
//     console.log(state)
//     switch (action.type) {
//         case func.setPage :
//             return {...state, page: action.page}
//         case Pages.MAIN_FRAME :
//             return {...state, page: Pages.MAIN_FRAME}
//         case func.gameStart: {
//             console.log(state)
//             const PlayersNumber = state.playerData.length;
//             switch (PlayersNumber) {
//                 case 5 :
//                     state.takeStage = needPlayers._5P;
//                     break;
//                 case 6:
//                     state.takeStage = needPlayers._6P;
//                     break;
//                 case 7:
//                     state.takeStage = needPlayers._7P;
//                     break;
//                 case 8:
//                 case 9:
//                 case 10:
//                     state.takeStage = needPlayers._8to10P;
//                     break;
//                 default:
//                     alert('error');
//             }
//             if (PlayersNumber >= 5) {
//                 const temp = [
//                     ...mustHaveRoles,
//                     ...expandRoles.slice(0, PlayersNumber - 5),
//                 ];
//                 const roles = shuffle(temp);
//                 // eslint-disable-next-line array-callback-return
//                 state.playerData.map((user, index) => {
//                     user.role = roles[index];
//                 });
//                 // dispatch({type: "page", page})
//                 return {...state, page: Pages.MAIN_FRAME}
//             } else {
//                 alert('error')
//                 return {...state}
//             }
//         }
//         case func.mainFrameClick :
//             return {...state, mainFrameClick: true, playerCheckedNumber: 0}
//         case func.votePage : {
//             let agree = 0;
//             let oppose = 0;
//             state.playerData.map(e => e.toGo === 'agree' ? ++agree : ++oppose)
//             state.represent += 1;
//             state.represent %= state.playerData.length;
//             if (agree >= oppose) {
//                 // const page = EXPEDITION_FRAME
//                 state.voteStage = 0;
//                 return {...state, page: Pages.EXPEDITION_FRAME}
//                 // dispatch({type: "page", page})
//             } else {
//                 // const page = MAIN_FRAME
//                 if (state.voteStage === 4) {
//                     state.takeStage[state.expeditionStage] = 'fail';
//                     state.expeditionStage += 1;
//                     state.voteStage = 0;
//                 } else {
//                     state.voteStage += 1;
//                 }
//                 // dispatch({type: "page", page})
//                 return {...state, page: Pages.MAIN_FRAME}
//             }
//         }
//         case func.voteOnChange : {
//             const check = !state.playerData[action.index].selected
//             state.playerData[action.index].selected = check
//             console.log(state.playerCheckedNumber)
//             // dispatch({type: "playerCheckedNumber", playerCheckedNumber})
//             return {
//                 ...state,
//                 playerCheckedNumber: check ? state.playerCheckedNumber + 1 : state.playerCheckedNumber - 1
//             }
//         }
//         case func.voteOnClick : {
//             if (state.playerCheckedNumber === state.takeStage[state.expeditionStage]) {
//                 const voteCount = state.voteCount + 1
//                 // const page = VOTE_FRAME
//                 // dispatch({type: "voteCount", voteCount})
//                 // dispatch({type: "mainFrameClick"})
//                 // dispatch({type: "checkedReset"})
//                 // dispatch({type: "page", page})
//                 state.voteResult = action.value
//                 return {
//                     ...state,
//                     voteCount: voteCount,
//                     page: Pages.VOTE_FRAME,
//                     mainFrameClicked: false,
//                     playerCheckedNumber: 0,
//                 }
//             } else {
//                 alert(`${state.takeStage[state.expeditionStage]}명을 선택해야합니다.`);
//                 return {...state}
//             }
//         }
//         case func.expeditionResult : {
//
//         }
//         case func.nextPage : {
//             const angelCount = state.takeStage.filter(element => 'success' === element).length;
//             const evilCount = state.takeStage.filter(element => 'fail' === element).length;
//             if (angelCount === 3) {
//
//                 state.page = Pages.ASSASSIN_FRAME
//                 return {...state, page: Pages.ASSASSIN_FRAME}
//             }
//             if (evilCount === 3) {
//
//                 state.winner = 'EVILS_WIN'
//                 return {...state, page: Pages.END_GAME_FRAME}
//             }
//             return {...state, expedition: false, vote: []}
//         }
//
//         case func.expeditionClick : {
//             console.log(`takeStage : ${state.takeStage}`)
//             console.log(`expeditionStage : ${state.expeditionStage}`)
//             if (state.expeditionStage === 4 && state.playerData.length >= 7) {
//                 if (state.vote.filter(element => 'fail' === element).length >= 2) {
//                     state.takeStage[state.expeditionStage] = 'fail';
//                 } else {
//                     state.takeStage[state.expeditionStage] = 'success'
//                 }
//             } else {
//                 state.vote.includes('fail') ?
//                     state.takeStage[state.expeditionStage] = 'fail' :
//                     state.takeStage[state.expeditionStage] = 'success'
//             }
//             state.expeditionStage += 1;
//             return {...state, expedition: true}
//         }
//         case Pages.ASSASSIN_FRAME : {
//             // const page = END_GAME_FRAME
//             state.winner = state.killedPlayer === 'merlin' ? '악의 승리' : '선의 승리'
//             // state.page = END_GAME_FRAME
//             return {...state, page: Pages.END_GAME_FRAME}
//             // dispatch({type: "winner", winner})
//             // dispatch({type: "page", page})
//         }
//         case Pages.END_GAME_FRAME: {
//             return {...state, page: Pages.END_GAME_FRAME}
//         }
//         default :
//             return state
//     }
// }