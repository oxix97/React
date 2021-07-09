import React, {useContext, useEffect, useState} from "react";
import {UserState, PlayState, needPlayers, mustHaveRoles, expandRoles, voteStageColor, angels} from "./gameSetting";
import {Circle, Frame, PublicFrame, Title, User, VoteStageFrame} from "./MainPage/Styled";
import shuffle from "lodash.shuffle";
import MerlinPlayer from "./Ability/MerlinPlayer";
import PercivalPlayer from "./Ability/PercivalPlayer";
import Vote from "./RepresentVote/Vote";
import AngelsVote from "./ExpeditionVote/AngelsVote";
import EvilsVote from "./ExpeditionVote/EvilsVote";
import PublicStage from "./gamePage/mainView/PublicStage";

export const pages = {
    START_FRAME: 'START_FRAME',
    PUBLIC_FRAME: 'PUBLIC_FRAME',
    MAIN_VOTE: 'MAIN_VOTE',
    MAIN_SELECT_PLAYER: 'MAIN_SELECT_PLAYER',
    VOTE_FRAME: 'VOTE_FRAME',
    VOTE_RESULT: 'VOTE_RESULT',
    EXPEDITION_FRAME: 'EXPEDITION_FRAME',
    EXPEDITION_RESULT: 'EXPEDITION_RESULT',
    ASSASSIN_FRAME: 'ASSASSIN_FRAME',
    END_GAME_FRAME: 'END_GAME_FRAME',
}

const initialState = {
    playerData: [
        {nickname: 'user1', role: '', vote: '', toGo: '', selected: false},
        {nickname: 'user2', role: '', vote: '', toGo: '', selected: false},
        {nickname: 'user3', role: '', vote: '', toGo: '', selected: false},
        {nickname: 'user4', role: '', vote: '', toGo: '', selected: false},
        {nickname: 'user5', role: '', vote: '', toGo: '', selected: false},
        // {nickname: 'user6', role: '', vote: '', toGo: '',selected : false},
        // {nickname: 'user7', role: '', vote: '', toGo: '',selected : false},
        // {nickname: 'user8', role: '', vote: '', toGo: '',selected : false},
        // {nickname: 'user9', role: '', vote: '', toGo: '',selected : false},
    ],
    voteStage: 0,
    expeditionStage: 0,
    represent: 0,
    vote: [],
    takeStage: [],

    mainFrameClick: false,
    playerCheckedNumber: 0,
    voteCount: 0,
    voteResult: false,
    expedition: false,
    winner: '',
    page: pages.START_FRAME,
    kill: '',
}
export const reducer = (state, action) => {
    console.log(state)
    switch (action.type) {
        case "setPage" :
            return {...state, page: action.page}
        case "mainFrameClick":
            return {...state, mainFrameClick: action.mainFrameClick}
        case "playerCheckedNumber" :
            return {...state, playerCheckedNumber: state.playerCheckedNumber + action.playerCheckedNumber}
        case "checkedReset":
            return {...state, playerCheckedNumber: 0}
        case "voteCount":
            return {...state, voteCount: action.voteCount}
        case "voteResult":
            return {...state, voteResult: action.voteResult}
        case "expedition":
            return {...state, expedition: action.expedition}
        case "winner":
            return {...state, winner: action.winner}
        case "page":
            return {...state, page: action.page}
        case "kill":
            return {...state, kill: action.killedPlayer}
        default :
            return state
    }
}

function AVALON_Reducer() {

}

export default AVALON_Reducer