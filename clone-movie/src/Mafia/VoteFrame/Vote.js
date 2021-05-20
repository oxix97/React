import React,{useState} from "react";
import {Users} from "../meetingFrame/Users";
function Vote({history}) {
    const [voteUser, setVoteUser] = useState('none');
    const onVoteChange = e => {
        setVoteUser(e.target.value);
    }
    return(
        <div>
            <select value={voteUser} onChange={onVoteChange}>
                <option value="none">무효표</option>
                {
                Users.map((user,index)=>(
                    <option value={user.nickname}>{user.nickname}</option>
                ))
            }
            </select>
            <button onClick={() => {
                history.push({
                    pathname: "/voteResult",
                    state: {
                        vote: voteUser
                    }
                })
            }}>투표하기</button>
        </div>
    )
}
export default Vote;