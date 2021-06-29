import React, {useContext} from "react";
import {Player,percivalSight} from "../gameSetting";



function PercivalPlayer() {
    const userState = useContext(Player)
    return (
        <div>
            {
                userState.map((user, index) => (
                    <div key={index}>
                        {percivalSight.includes(user.role) ? user.nickname : null}
                    </div>
                ))
            }
        </div>
    )
}

export default PercivalPlayer