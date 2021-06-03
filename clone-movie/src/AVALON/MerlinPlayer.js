import React from "react";
import {evils, merlinSight, Players} from "./gameSetting";
const godEyes = () =>{
    Players.map((user, index) => {
        if(merlinSight.includes(user.role))
            console.log(user.nickname)
    });
}

function MerlinPlayer() {
    return(
        <div>
            <button onClick={godEyes}>Merlin</button>
        </div>
    )
}

export default MerlinPlayer;