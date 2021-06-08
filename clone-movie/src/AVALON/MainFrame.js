import React from "react";
import {
    Frame, PageFrame,
    RoleList, UserList,
    GameFrame, GameState
} from "./Styled";

import VoteResult from "./VoteResult";

import PlayerInfo from "./PlayerInfo";

function MainFrame() {
    return (
        <PageFrame>
            <UserList/>
            <PlayerInfo/>
            <GameFrame>
                <GameState>
                </GameState>
            </GameFrame>
        </PageFrame>
    )
}

export default MainFrame