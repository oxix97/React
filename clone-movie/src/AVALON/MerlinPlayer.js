import React from "react";
import {evils, Players} from "./gameSetting";
const godEyes = () =>{
    const evilList = evils.slice(0,3);
    Players.map((user, index) => {
        if(evilList.includes(user.role))
            console.log(user.nickname)
    });
}

function MerlinPlayer() {
    return(
        <div>
            <button onClick={godEyes}>click</button>
        </div>
    )
}

export default MerlinPlayer;