import React from "react";
import {useLocation} from 'react-router-dom';
import {Players} from "./gameSetting";

function GameEnd({history}) {
    const location = useLocation();
    const value = location.state.value;
    return (
        <div>
            {
                value === 'Merlin' ?
                    <h3>악마가 승리하였습니다.</h3> :
                    <h3>천사가 승리하였습니다.</h3>
            }
            {Players.map((user, index) => (
                <div key={index}>
                    <li>{user.nickname} : {user.role}</li>
                    <br/>
                </div>
            ))}
        </div>
    )
}

export default GameEnd