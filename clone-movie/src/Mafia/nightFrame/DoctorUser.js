import React, {useState} from "react";
import {Users} from "../meetingFrame/Users";
function DoctorUser(){
    const [index,setIndex] = useState(0);
    const [vote, setVote] = useState(Users.users[index].nickname)
    const [isClick, setIsClick] = useState(false);
    return(
        <div>

        </div>
    )
}

export default DoctorUser;
