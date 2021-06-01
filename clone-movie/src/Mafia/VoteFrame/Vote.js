import React, {useState} from "react";
import {Game} from "../meetingFrame/Users";

function Vote({history}) {
    const [isActive, setIsActive] = useState(false);
    const [voteNickname, setVoteNickname] = useState('none');
    const onVoteChange = e => {
        setVoteNickname(e.target.value);
    }

    const VotedUser = e => {
        const votedUser = e.target.value;
        Game.users.map((user) => {
            if (user.nickname === votedUser || votedUser === 'none') {
                user.vote += 1;
                history.push({
                    vote: voteNickname,
                });
                setIsActive(true);
                console.log(user.nickname);
            }
        });
    }

    const votedCounted = () => {
        let count = 0;
        let num = 0;
        Game.users.map((user, index) => {
            if (count <= user.vote) {
                count = user.vote;
                num = index;
            }
        });
        console.log(Game.users[num].nickname + ' has ' + Game.users[num].vote);
    };

    return (
        <>
            {
                Game.users.map((users, index) => (
                    <div key={index}>
                        <span>{`${users.nickname}`} &nbsp; </span>
                        <select onChange={onVoteChange}>
                            <option value='none'>무효표</option>
                            {
                                Game.users.map((user, index) => (
                                    <option key={`${index}`} name={'username'} value={voteNickname}>
                                        {user.nickname}
                                    </option>
                                ))
                            }
                        </select>

                        <button
                            onClick={VotedUser}
                            disabled={isActive}
                            value={voteNickname}
                        >
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