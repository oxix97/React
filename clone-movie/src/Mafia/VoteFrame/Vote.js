import React, {useState} from "react";
import {Users, ALIVE, DEAD} from "../meetingFrame/Users";


function Vote({history, disabled}) {
    const [voteNickname, setVoteNickname] = useState('none');
    const onVoteChange = e => {
        setVoteNickname(e.target.value);
    }

    const VotedUser = () => {
        Users.map((user, index) => {
            if (user.nickname === voteNickname) {
                user.vote += 1;
                console.log(user.nickname);
                history.push({
                    vote: voteNickname,
                })
            }
        });
    }

    return (
        <>
            {
                Users.map((users, index) => (
                    <div>
                        <div>
                            {users.nickname}
                        </div>
                        <select value={voteNickname} onChange={onVoteChange}>
                            <option value='none'>무효표</option>
                            {
                                Users.map((user, index) => (
                                    <option value={user.nickname}>
                                        {user.nickname}
                                    </option>
                                ))
                            }
                        </select>

                        <button
                            id={users.nickname + 'button'}
                            onClick={VotedUser}
                        >
                            투표하기
                        </button>
                    </div>
                ))
            }
            <div>
                <button onClick={() => (history.push({
                    pathname: '/voteResult',
                }))}>
                    결과 보기
                </button>
            </div>
        </>
    );
}

export default Vote;