import React from "react";
import {Players} from "./gameSetting";
function Stage() {
    return(
        <div>
            {
                Players.map((user,index)=>(
                    <ul key={index}>
                        {user.selected}
                    </ul>
                ))
            }
        </div>
    )
}
export default Stage