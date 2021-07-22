import React, {useContext} from "react";
import {EXPEDITION_FRAME, GameContext} from "../Store";

function VOTE_RESULT() {
    const {gameState, dispatch} = useContext(GameContext)
    console.log(gameState)
    return (
        <div>
            {gameState.usingPlayers.map((user, index) => (
                <ul key={index}>
                    <li>{`nickname : ${user.nickname}`}</li>
                    <li>{`vote : ${user.toGo === 'agree' ? '찬성' : '반대'}`}</li>
                </ul>
            ))}
            <button onClick={() => dispatch({type: EXPEDITION_FRAME})}>다음</button>
        </div>
    )
}

export default VOTE_RESULT