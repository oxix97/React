import React from "react";
import {Players, percivalSight} from "../gameSetting";


function PercivalPlayer() {
    return(
        <div>
            {
                Players.map((user,index)=>(
                    <div key={index}>
                        {percivalSight.includes(user.role) ? user.nickname : null}
                    </div>
                ))
            }
        </div>
    )
}

export default PercivalPlayer