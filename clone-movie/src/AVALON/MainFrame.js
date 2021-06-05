import React from "react";
import {
    Frame, PageFrame,
    RoleList, UserList,
    GameFrame, GameState
} from "./Styled";
import MerlinPlayer from "./MerlinPlayer";
import PercivalPlayer from "./PercivalPlayer";
import VoteResult from "./VoteResult";
import Expedition from "./Expedition";
import ExpeditionVote from "./ExpeditionVote";
import PlayerInfo from "./PlayerInfo";

function MainFrame() {
    return (
        <PageFrame>
            <Expedition/>
            <UserList/>
            <PlayerInfo/>
            <GameFrame>
                <GameState>

                </GameState>
            </GameFrame>
            <VoteResult/>
        </PageFrame>
    )
}

export default MainFrame