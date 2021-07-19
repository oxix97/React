import React, {useContext} from "react";
import {
    GameContext,
    START_FRAME,
    FRAME_MAIN,
    MAIN_VOTE,
    VOTE_FRAME,
    VOTE_RESULT,
    EXPEDITION_RESULT,
    EXPEDITION_FRAME,
    ASSASSIN_FRAME,
    END_GAME_FRAME
} from "./Store";

import GameStart from "./View/GameStart";
import MAIN from "./View/MAIN_FRAME";
import RESULT_MAIN from "./View/MAIN_VOTE";
import VOTE from "./View/VOTE_FRAME";
import RESULT_VOTE from "./View/VOTE_RESULT";
import EXPEDITION from "./View/EXPEDITION_FRAME";
import RESULT_EXPEDITION from "./View/EXPEDITION_RESULT";
import ASSASSIN from "./View/ASSASSIN_FRAME";
import END_GAME from "./View/END_GAME_FRAME";

function View() {
    const {gameState} = useContext(GameContext)
    console.log(`view in ${gameState.component}`)
    switch (gameState.component) {
        case START_FRAME :
            return <GameStart/>
        case FRAME_MAIN:
            return <MAIN/>
        case MAIN_VOTE :
            return <RESULT_MAIN/>
        case VOTE_FRAME :
            return <VOTE/>
        case VOTE_RESULT:
            return <RESULT_VOTE/>
        case EXPEDITION_FRAME:
            return <EXPEDITION/>
        case EXPEDITION_RESULT:
            return <RESULT_EXPEDITION/>
        case ASSASSIN_FRAME :
            return <ASSASSIN/>
        case END_GAME_FRAME :
            return <END_GAME/>
        default :
            return <div>error</div>
    }
    // return (
    //     <>
    //         {gameState.component === START_FRAME && <GameStart/>}
    //         {gameState.component === FRAME_MAIN && <MAIN/>}
    //         {gameState.component === MAIN_VOTE && <RESULT_MAIN/>}
    //         {gameState.component === VOTE_FRAME && <VOTE/>}
    //         {gameState.component === VOTE_RESULT && <RESULT_VOTE/>}
    //         {gameState.component === EXPEDITION_FRAME && <EXPEDITION/>}
    //         {gameState.component === EXPEDITION_RESULT && <RESULT_EXPEDITION/>}
    //         {gameState.component === ASSASSIN_FRAME && <ASSASSIN/>}
    //         {gameState.component === END_GAME_FRAME && <END_GAME/>}
    //     </>
    // )
}

export default View