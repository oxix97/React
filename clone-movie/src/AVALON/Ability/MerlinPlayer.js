import React, {useContext} from "react";
import {Player,merlinSight} from "../gameSetting";


function MerlinPlayer() {
    const userState = useContext(Player)
    return(
        <div>
            {
                userState.map((user,index)=>(
                    <div key={index}>
                        {merlinSight.includes(user.role) ? user.nickname : null}
                    </div>
                ))
            }
        </div>
    )
}

export default MerlinPlayer;