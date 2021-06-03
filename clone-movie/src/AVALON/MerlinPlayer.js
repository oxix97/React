import React from "react";
import {evils} from "./gameSetting";
const godEyes = () =>{
    const list = evils.slice(0,3);
    console.log(list)
}

function MerlinPlayer() {
    return(
        <div>
            <button onClick={godEyes}>click</button>
        </div>
    )
}

export default MerlinPlayer;