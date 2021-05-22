import React, {useState} from "react";
import {Users, ALIVE, DEAD} from "../meetingFrame/Users";


function Vote({history}) {
    const [vote, setVote] = useState('none');
    const onVoteChange = e => {
        setVote(e.target.value);
    }

    const VotedUser = () => {
        Users.map((user, index) => {
            if (user.nickname === vote) {
                user.vote += 1;
            }
        });
    }

    return (
        <>
            <div>
                <select value={vote} onChange={onVoteChange}>
                    <option value='none'>무효표</option>
                    {
                        Users.map((user, index) => (
                            <option value={user.nickname}>
                                {user.nickname}
                            </option>
                        ))
                    }
                </select>
                <button onClick={() => (VotedUser)(history.push({
                    pathname: "/voteResult",
                    state: {
                        vote: vote,
                        life: DEAD
                    }
                }))}>투표하기
                </button>
            </div>
        </>
    );
}

export default Vote;