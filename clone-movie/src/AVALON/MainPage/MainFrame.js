import React from "react";
import {
    Frame, PageFrame,
    RoleList, UserList,
    GameFrame, GameState
} from "../Styled";

import AssassinPlayer from "../Ability/AssassinPlayer";
import PlayerInfo from "./PlayerInfo";
import ExpeditionStage from "./ExpeditionStage";
import VoteStage from "./VoteStage";
import {Background,Players} from "../gameSetting";
import GameEnd from "../GameEnd";

function MainFrame() {
    const angels = Background.takeStage.filter(element => 'success' === element).length;
    const evils = Background.takeStage.filter(element => 'fail' === element).length;
    return (
        <PageFrame>
            {angels === 3 || evils === 3 ?
                <div>
                    {angels===3 ?
                        Players.map(e=>e.role==='Assassin') ? <AssassinPlayer/> : null
                        :
                        <GameEnd/>}
                </div> :
                <div>
                    <ExpeditionStage/>
                    <VoteStage name={'hello'}/>
                    <UserList/>
                    <PlayerInfo/>
                    <GameFrame>
                        <GameState/>
                    </GameFrame>
                </div>
            }
        </PageFrame>
    )
}

export default MainFrame;