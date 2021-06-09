import React from "react";
import {
    Frame, PageFrame,
    RoleList, UserList,
    GameFrame, GameState
} from "../Styled";

import PlayerInfo from "./PlayerInfo";
import ExpeditionStage from "./ExpeditionStage";
import VoteStage from "./VoteStage";

function MainFrame() {
    return (
        <PageFrame>
            <ExpeditionStage/>
            <VoteStage name={'hello'}/>
            <UserList/>
            <PlayerInfo/>
            <GameFrame>
                <GameState/>
            </GameFrame>
        </PageFrame>
    )
}

export default MainFrame