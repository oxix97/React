import React, {useEffect, useState} from "react";
import {Users, ALIVE, DEAD} from "../meetingFrame/Users";


function Vote({history}) {
    const [voteNickname, setVoteNickname] = useState('none');
    const [isActive, setIsActive] = useState(false);

    const onVoteChange = e => {
        setVoteNickname(e.target.value);
    }

    const VotedUser = () => {
        Users.map((user, index) => {
            if (user.nickname === voteNickname || voteNickname === 'none') {
                user.vote += 1;
                console.log(user.nickname);
                history.push({
                    vote: voteNickname,
                });
                setIsActive(true);
            }
        });
    }

    const votedCounted = () => {
        let count = 0;
        let num = 0;
        Users.map((user, index) => {
            if (count <= user.vote) {
                count = user.vote;
                num = index;
            }
        });
        console.log(Users[num].nickname + ' has ' + Users[num].vote);
    };

    return (
        <>
            {
                Users.map((users, index) => (
                    <div>
                        <div>
                            {users.nickname}
                        </div>
                        <select id={users.nickname} value={voteNickname} onChange={onVoteChange}>
                            <option value='none'>무효표</option>
                            {
                                Users.map((user, index) => (
                                    <option id={user.nickname} value={user.nickname}>
                                        {user.nickname}
                                    </option>
                                ))
                            }
                        </select>

                        <button
                            id={users.nickname + 'button'}
                            onClick={VotedUser}
                            disabled={isActive}>
                            투표하기
                        </button>
                    </div>
                ))
            }
            <div>
                <button onClick={() => (votedCounted)(history.push({
                    pathname: '/voteResult',
                    vote: voteNickname,
                }))}>
                    결과 보기
                </button>
            </div>
        </>
    );
}

export default Vote;