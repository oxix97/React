import React from "react";
import {Players,percivalSight} from "./gameSetting";

const percivalSkill = () => {
    Players.map((user, index) => {
        if (percivalSight.includes(user.role)) {
            console.log(user.nickname)
        }
    });
}

function PercivalPlayer() {
    return (
        <div>
            <button onClick={percivalSkill}>percival</button>
        </div>
    )
}

export default PercivalPlayer