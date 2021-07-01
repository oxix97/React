import React, {useContext, useEffect, useState} from "react";
import {Game, Player, needPlayers, mustHaveRoles, expandRoles, voteStageColor, angels} from "./gameSetting";
import {Circle, Frame, PublicFrame, Title, User, VoteStageFrame} from "./MainPage/Styled";
import shuffle from "lodash.shuffle";
import MerlinPlayer from "./Ability/MerlinPlayer";
import PercivalPlayer from "./Ability/PercivalPlayer";
import Vote from "./RepresentVote/Vote";
import AngelsVote from "./ExpeditionVote/AngelsVote";
import EvilsVote from "./ExpeditionVote/EvilsVote";

const START = 0;
const MAIN_FRAME = 1;
const VOTE = 2;
const EXPEDITION = 3;
const ASSASSIN = 4;
const END_GAME = 5;

function reducer(state, action) {

}

function AVALON_VIEW(state,action) {
    switch (action.type) {
        case START:
            return(<div></div>)
        case MAIN_FRAME:
        case VOTE :
        case EXPEDITION:
        case ASSASSIN:
        case END_GAME:
    }
}

export default AVALON_VIEW