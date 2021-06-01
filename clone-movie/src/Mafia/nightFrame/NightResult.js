import React from "react";
import {Game} from "../meetingFrame/Users";
import {HDisplay, WDisplay} from "./Night";

function NightResult({history}) {
    return (
        <HDisplay>
            <WDisplay>
                {
                    Game.users.map((user, index) => (
                        <ul key={index}>
                            <li>{`nickname : ${user.nickname}`}</li>
                            <li>{`role : ${user.role}`}</li>
                            <li>{`life : ${user.life}`}</li>
                            <li>{`skill : ${user.skill}`}</li>
                        </ul>
                    ))
                }
            </WDisplay>
            <button onClick={() => history.push({
                pathname: '/meetingRoom',
            })}>
                회의방으로
            </button>
        </HDisplay>
    )
}

export default NightResult