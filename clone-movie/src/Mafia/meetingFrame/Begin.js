import React from "react";
import shuffle from "lodash.shuffle";
import {Users, Roles, MafiaOne, MafiaTwo} from "./Users";

function Begin({history}) {
    const shuffleList = () => {
        const mafiaList = [];
        if (Users.length >= 4) {
            if (Users.length <= 6) {
                mafiaList.push('Mafia');
            } else if (Users.length <= 10) {
                mafiaList.push('Mafia');
                mafiaList.push('Mafia');
            }
            const temp = [
                ...mafiaList,
                ...Roles.slice(0, Users.length - mafiaList.length),
            ]
            const roles = shuffle(temp);
            Users.map((user, index) => {
                user.role = roles[index];
            });
            history.push({
                pathname: '/meetingRoom',
            })
        } else {
            alert('진행할 수 없습니다.');
        }
    };

    return (
        <>

            <button onClick={shuffleList}>
                게임 시작
            </button>
        </>
    );
}

export default Begin;