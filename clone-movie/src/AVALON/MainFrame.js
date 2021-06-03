import React from "react";
import {PageFrame,Title} from "./Styled";
import {PlayerInfo, Players} from "./gameSetting";
import MerlinPlayer from "./MerlinPlayer";

function MainFrame() {
    return(
        <PageFrame>
            <PlayerInfo/>
            <MerlinPlayer/>
        </PageFrame>
    )
}

export default MainFrame