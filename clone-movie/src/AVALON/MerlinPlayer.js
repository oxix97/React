import React from "react";
import {merlinSight, Players} from "./gameSetting";

function MerlinPlayer() {
    return(
        <div>
            {
                Players.map((user,index)=>(
                    <div key={index}>
                        {merlinSight.includes(user.role) ? user.nickname : null}
                    </div>
                ))
            }
        </div>
    )
}

export default MerlinPlayer;