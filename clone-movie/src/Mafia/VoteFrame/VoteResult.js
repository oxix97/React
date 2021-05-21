import React from "react";
import {useLocation} from 'react-router-dom'
import {Users} from "../meetingFrame/Users";

function VoteResult() {
    const location = useLocation();
    const voteResultNickname = location.state.vote;
    const voteResultLife = location.state.life;
    const findUserList = () => {
        Users.map((user, index) => {
            if (user.nickname === voteResultNickname) {
                user.life = voteResultLife;
                console.log(user.nickname);
                console.log(user.life);
            }
        })
    }
    return (
        <div>
            <h1>{voteResultNickname}</h1>
            <button onClick={findUserList}>dd</button>
            {
                Users.map((user, index) => (
                    <div>
                        <li>{user.nickname}</li>
                        <li>{user.life}</li>
                    </div>
                ))
            }
        </div>
    )
}

export default VoteResult;