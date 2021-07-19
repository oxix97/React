import React, {useContext} from "react";
import {FRAME_MAIN, GameContext} from "../Store";
import {SET_COMPONENT, VOTE_CHECK} from "../MVC/AVALON_Reducer";
import MAIN_FRAME from "./MAIN_FRAME";

function GameStart() {
    const {dispatch,...game} = useContext(GameContext)
    const component = FRAME_MAIN
    console.log(`dispatch : ${dispatch} , game : ${game}`)
    return (
        <div>
            <button onClick={game.gameStart}>게임 시작</button>
            <button onClick={()=>dispatch({type:SET_COMPONENT,component})}>component</button>
        </div>
    )
}

export default GameStart