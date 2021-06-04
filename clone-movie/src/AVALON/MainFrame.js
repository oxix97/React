import React from "react";
import {
    Frame, PageFrame,
    RoleList, UserList,
    GameFrame, GameState} from "./Styled";
import {PlayerInfo} from "./gameSetting";
import MerlinPlayer from "./MerlinPlayer";
import PercivalPlayer from "./PercivalPlayer";
import Expedition from "./Expedition";

function MainFrame() {
    return (
        <PageFrame>
            <UserList>
                <PlayerInfo/>
            </UserList>
            <GameFrame>
                <RoleList>
                    <Frame color={'green'}>
                        <h4>Merlin</h4>
                        <MerlinPlayer/>
                    </Frame>
                    <Frame color={'green'}>
                        <h4>Percival</h4>
                        <PercivalPlayer/>
                    </Frame>
                </RoleList>
                <GameState>
                    <Expedition/>
                </GameState>
            </GameFrame>

        </PageFrame>
    )
}

export default MainFrame