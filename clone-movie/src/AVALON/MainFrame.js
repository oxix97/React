import React from "react";
import {Frame, PageFrame, Title} from "./Styled";
import {PlayerInfo, Players} from "./gameSetting";
import MerlinPlayer from "./MerlinPlayer";
import PercivalPlayer from "./PercivalPlayer";

function MainFrame() {
    return (
        <PageFrame>
            <PlayerInfo/>
            <Frame>
                <h4>Merlin</h4>
                <MerlinPlayer/>
            </Frame>
            <Frame>
                <h4>Percival</h4>
                <PercivalPlayer/>
            </Frame>
        </PageFrame>
    )
}

export default MainFrame