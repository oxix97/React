import React, {useState} from "react";
import {Users,DEAD} from "../meetingFrame/Users";

function MafiaUser() {
    const [index,setIndex] = useState(0);
    const [vote, setVote] = useState(Users[index].nickname)
    const [isClick, setIsClick] = useState(false);
    const [killPlayer,setKillPlayer] = useState('');

    const onClick = e => {
        setVote(e.target.value);
    };
    const onChange = e => {
        const playerIndex = e.target.value;
        setIndex(playerIndex);
        setIsClick(true);
    };

    return(
        <div>

        </div>
    )
}

export default MafiaUser;