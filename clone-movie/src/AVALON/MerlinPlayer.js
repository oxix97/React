import React from "react";
import {merlinSight, Players} from "./gameSetting";


function MerlinPlayer(props) {
    return(
        <div>
            {
                Players.map((user,index)=>(
                    <div>
                        {merlinSight.includes(user.role) ? user.nickname : null}
                    </div>
                ))
            }
        </div>
    )
}

export default MerlinPlayer;