import React from "react";
import {Game} from "../meetingFrame/Users";

function NightResult({history}) {
    return (
        <div>
            {
                Game.users.map((user, index) => (
                    <div key={index}>
                        <li>{`name : ${user.nickname}`}</li>
                        <li>{`role : ${user.role}`}</li>
                        <li>{`life : ${user.life}`}</li>
                    </div>
                ))
            }
            <button onClick={() => history.push({
                pathname: '/meetingRoom',
            })}>
                회의방으로
            </button>
        </div>
    )
}

export default NightResult