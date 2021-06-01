import React, {useState} from "react";
import {Users, DEAD} from "../meetingFrame/Users";

function MafiaUser() {
    const [index, setIndex] = useState(0);
    const [vote, setVote] = useState(Users.users[index].nickname)
    const [isClick, setIsClick] = useState(false);
    const [killed, setKilled] = useState('');
    const onClick = e => {
        const playerIndex = e.target.value;
        setIndex(playerIndex);
        setIsClick(true);
        setKilled(Users.users[playerIndex].nickname);
        Users.users[index].life = DEAD;
        console.log(Users.users[index].life);
    };
    const onChange = e => {
        setVote(e.target.value);
    };

    return (
        <div>
            <select onChange={onChange}>
                {Users.users.map((user, index) => (<option key={index} value={index}>{user.nickname}</option>))}
            </select>
            <button onClick={onClick} disabled={isClick} value={vote}>습격하기</button>
            {
                isClick ? (
                    <h3>{`${killed}를 습격하였습니다.`}</h3>
                ) : null
            }
        </div>
    )
}

export default MafiaUser;